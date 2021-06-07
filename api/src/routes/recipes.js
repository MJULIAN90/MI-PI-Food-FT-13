require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const URL = "https://api.spoonacular.com/recipes/";
const { Recipe } = require("../db");

/* 

todo-- ok listo todo solo cambiar las cantidades de peticion
GET https://api.spoonacular.com/recipes/complexSearch

Para los tipos de dieta deben tener en cuenta las propiedades vegetarian, vegan, glutenFree por un lado y también analizar las que se incluyan dentro de la propiedad diets

GET /recipes?name="...":
- Obtener un listado de las primeras 9 recetas que contengan la palabra ingresada como query parameter
- Si no existe ninguna receta mostrar un mensaje adecuado
*/

//todo-- cambiar number=15 * 100 en los dos if
router.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    let info = [];

    let responseDb = await Recipe.findAll({ where: { Name: name } });

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=15`
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

    console.log("total ", total.length);
    if (total.length === 0) return res.send("No se encontraron coincidencias");

    if (responseDb.length === 0) return res.send(info.slice(0, 9));

    return res.send(total.slice(0, 9));
  }

  if (!name) {
    let info = [];

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=15`
    );

    responseApi.data.results.map((data) => {
      const { title, diets, image, vegetarian, id } = data;

      let obj = {
        id,
        image,
        title,
        diets,
        vegetarian,
      };

      info.push(obj);
      //console.log(obj);
    });

    return res.send(info);
  }
});

/* 
todo -- todo listo creo

GET https://api.spoonacular.com/recipes/{id}/information

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
