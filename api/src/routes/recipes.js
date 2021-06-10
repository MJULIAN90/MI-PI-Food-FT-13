require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const URL = "https://api.spoonacular.com/recipes/";
const { Recipe } = require("../db");

/* 
todo-- ok , listo todo solo cambiar las cantidades de peticion

GET /recipes?name="...":
- Obtener un listado de las primeras 9 recetas que contengan la palabra ingresada como query parameter
- Si no existe ninguna receta mostrar un mensaje adecuado
*/

router.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    let info = [];

    let responseDb = await Recipe.findAll({ where: { Name: name } });

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

    let total = responseDb.concat(info);

    if (total.length === 0) return res.send("No se encontraron coincidencias");

    if (responseDb.length === 0) return res.send(info.slice(0, 9));

    return res.send(total.slice(0, 9));
  }

  if (!name) {
    let info = [];

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=5`
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

/* 
todo -- todo listo creo

GET /recipes/{idReceta}:
- Obtener el detalle de una receta en particular
- Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
*/

router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;

  let entry = idReceta.length > 10;

  if (entry) {
    let responseDb = await Recipe.findByPk(idReceta);
    return res.send(responseDb);
  }

  if (!entry) {
    let responseApi = await axios(`${URL}${idReceta}/information?${API_KEY}`);

    const {
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

    if (vegetarian) {
      let infoDetail = {
        img: image,
        title: title,
        type_dish: dishTypes,
        type_diet: [...diets, "vegeterian"],
        summary: summary,
        Puntuation: spoonacularScore,
        lvl_healthScore: healthScore,
        instructions: instructions,
      };

      return res.send(infoDetail);
    }

    let infoDetail = {
      img: image,
      title: title,
      type_dish: dishTypes,
      type_diet: diets,
      summary: summary,
      Puntuation: spoonacularScore,
      lvl_healthScore: healthScore,
      instructions: instructions,
    };
    return res.send(infoDetail);
  }
});

module.exports = router;
