require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const URL = "https://api.spoonacular.com/recipes/";
const { Recipe } = require("../db");

/* 

GET https://api.spoonacular.com/recipes/complexSearch

Para los tipos de dieta deben tener en cuenta las propiedades vegetarian, vegan, glutenFree por un lado y también analizar las que se incluyan dentro de la propiedad diets

GET /recipes?name="...":
- Obtener un listado de las primeras 9 recetas que contengan la palabra ingresada como query paraeter
- Si no existe ninguna receta mostrar un mensaje adecuado
*/
router.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    let responseDb = await Recipe.findAll({ where: { Name: name } });

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=100`
    );

    let total = responseDb.concat(responseApi).slice(0, 9);
  }

  //todo --- ok solo cambiar number=15 x 100
  if (!name) {
    let array = [];

    let responseApi = await axios(
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=15`
    );

    responseApi.data.results.map((data) => {
      const { title, diets, image, vegetarian } = data;

      let obj = {
        image,
        title,
        diets,
        vegetarian,
      };

      array.push(obj);
      //console.log(obj);
    });

    return res.send(array);
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

  let responseDb = await Recipe.findByPk(idreceta);

  if (responseDb.length === 0) {
    try {
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
          type_diet: diets,
          vegetarian: "vegetarian",
          summary: summary,
          Puntuation: spoonacularScore,
          lvl_healthScore: healthScore,
          instructions: instructions,
        };

        //return res.send (infoDetail)
        // este return con esa data para pruebas
        return res.send(responseApi.data);
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
      //return res.send(infoDetail);
      return res.send(responseApi.data);
    } catch (err) {
      res.send("Id invalido");
    }
  }
  // pendiente que creo que devuelve un array por eso es posicion 0 verificar
  return res.send(responseDb[0]);
});
module.exports = router;

/*
esto de ruta con name

if (vegetarian) {
      let info = {
        img: image,
        title: title,
        type_diet: diets,
        vegetarian: "vegetarian",
      };

      //return res.send(info);
      return res.send(responseApi.data);
    }

    if (!vegetarian) {
      let info = {
        img: image,
        title: title,
        type_diet: diets,
        vegetarian: "vegetarian",
      };

      //return res.send(info);
      return res.send(responseApi.data);
    } */
