require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const URL = "https://api.spoonacular.com/recipes/";
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");

/* 
GET /recipes?name="...":
- Obtener un listado de las primeras 9 recetas que contengan la palabra ingresada como query parameter
- Si no existe ninguna receta mostrar un mensaje adecuado
*/

router.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    let info = [];
    let db_array = [];

    let responseDb = await Recipe.findAll({
      where: {
        title: {
          [Op.iLike]: name,
        },
      },
      include: [
        {
          model: Diet,
        },
      ],
    });

    if (responseDb.length > 0) {
      responseDb.map((e) => {
        let array_diets = [];

        const {
          title,
          id,
          summary,
          Puntuation,
          lvl_healthScore,
          instructions,
          image,
          diets,
        } = e;

        diets.map((e) => {
          array_diets.push(e.dataValues.Name);
        });

        let obj = {
          title,
          id,
          summary,
          Puntuation,
          lvl_healthScore,
          instructions,
          image,
          diets: array_diets,
        };

        db_array.push(obj);
      });
    }

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=9`
    );

    let filtro = responseApi.data.results;
    let filters = filtro.filter((e) => e.title.includes(name));

    filters.map((e) => {
      const { title, image, diets, vegetarian, id } = e;

      if (vegetarian) {
        let obj = {
          id,
          title,
          image,
          diets: [...diets, "vegeterian"],
        };

        return info.push(obj);
      }

      let obj = {
        id,
        title,
        image,
        diets,
      };

      return info.push(obj);
    });

    let total = db_array.concat(info);

    if (total.length === 0) {
      console.log("no hay nada");
      return res.send("No se encontraron coincidencias");
    }

    if (db_array.length === 0) return res.send(info.slice(0, 9));

    return res.send(total.slice(0, 9));
  }

  if (!name) {
    let info = [];

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=10`
    );

    responseApi.data.results.map((data) => {
      const { title, diets, image, vegetarian, id, spoonacularScore } = data;

      if (vegetarian) {
        let obj = {
          id,
          title,
          image,
          diets: [...diets, "vegeterian"],
          spoonacularScore,
        };

        return info.push(obj);
      }

      let obj = {
        id,
        image,
        title,
        diets,
        spoonacularScore,
      };

      return info.push(obj);
    });

    return res.send(info);
  }
});

router.get("/creates", async (req, res) => {
  try {
    let info = [];
    let responseDb = await Recipe.findAll({
      include: [
        {
          model: Diet,
        },
      ],
    });

    responseDb.map((e) => {
      let array_diets = [];

      const {
        title,
        id,
        summary,
        Puntuation,
        lvl_healthScore,
        instructions,
        image,
        diets,
      } = e;

      diets.map((e) => {
        array_diets.push(e.dataValues.Name);
      });

      let obj = {
        title,
        id,
        summary,
        Puntuation,
        lvl_healthScore,
        instructions,
        image,
        diets: array_diets,
      };
      info.push(obj);
    });

    if (info.length < 0) return res.send("NO SE ENCONTRARON RECETAS EN LA DB");

    return res.send(info);
  } catch (err) {
    return res.send("Error Database");
  }
});

/* 
GET /recipes/{idReceta}:
- Obtener el detalle de una receta en particular
- Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
*/
router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;

  let entry = idReceta.length > 10;

  if (entry) {
    //let responseDb = await Recipe.findByPk({ idReceta });

    let info = [];

    let responseDb = await Recipe.findByPk(idReceta, {
      include: [
        {
          model: Diet,
        },
      ],
    });

    let array_diets = [];

    const {
      title,
      id,
      summary,
      Puntuation,
      lvl_healthScore,
      instructions,
      image,
      diets,
    } = responseDb;

    diets.map((e) => {
      array_diets.push(e.dataValues.Name);
    });

    let obj = {
      title,
      id,
      summary,
      Puntuation,
      lvl_healthScore,
      instructions,
      image,
      diets: array_diets,
    };

    info.push(obj);

    return res.send(info[0]);
  }

  if (!entry) {
    let responseApi = await axios(`${URL}${idReceta}/information?${API_KEY}`);

    const {
      id,
      image,
      title,
      dishTypes,
      diets,
      summary,
      spoonacularScore,
      healthScore,
      instructions,
      vegetarian,
    } = responseApi.data;

    let id_conv = id.toString();

    if (vegetarian) {
      let infoDetail = {
        id: id_conv,
        image,
        title,
        dishTypes,
        diets: [...diets, "vegeterian"],
        summary,
        Puntuation: spoonacularScore,
        lvl_healthScore: healthScore,
        instructions,
      };

      return res.send(infoDetail);
    }

    let infoDetail = {
      id: id_conv,
      image,
      title,
      dishTypes,
      diets,
      summary,
      Puntuation: spoonacularScore,
      lvl_healthScore: healthScore,
      instructions,
    };

    return res.send(infoDetail);
  }
});

module.exports = router;
