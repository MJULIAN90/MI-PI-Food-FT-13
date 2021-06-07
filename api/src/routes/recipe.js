const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { Recipe, Diet } = require("../db");

const router = Router();
/* 
POST /recipe:
- Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
- Crea una receta en la base de datos
*/

//! falta cuando son varios diets como agregar pendiente hacer

router.post("/", async (req, res) => {
  const {
    Name,
    Resumen_del_plato,
    Puntuacion,
    Nivel_de_comida_saludable,
    Paso_a_paso,
    diets,
  } = req.body;

  let data_recipe = {
    Name,
    Resumen_del_plato,
    Puntuacion,
    Nivel_de_comida_saludable,
    Paso_a_paso,
  };

  let id_diet = await Diet.findAll({ where: { Name: diets } });

  let recipe_create = await Recipe.create({
    Id: uuidv4(),
    ...data_recipe,
  });

  //? la verdad no se porque con setDiet no da y agregue una s y si da
  await recipe_create.setDiets(id_diet);

  res.send("Recipe Created");
});

module.exports = router;
