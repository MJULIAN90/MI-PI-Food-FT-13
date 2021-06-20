const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { Recipe, Diet } = require("../db");

const router = Router();
/* 
POST /recipe:
- Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
- Crea una receta en la base de datos
*/

router.post("/", async (req, res) => {
  const {
    title,
    summary,
    Puntuation,
    lvl_healthScore,
    instructions,
    diets,
    image,
  } = req.body;

  let data_recipe = {
    title,
    summary,
    Puntuation,
    lvl_healthScore,
    instructions,
    image,
  };

  try {
    let recipe_create = await Recipe.create({
      id: uuidv4(),
      ...data_recipe,
    });

    diets.map(async (e) => {
      let id_diet = await Diet.findAll({ where: { Name: e } });
      await recipe_create.setDiets(id_diet);
    });

    return res.send("Recipe Created");
  } catch (err) {
    console.log("error ", err);
    res.status(404).send("Error created");
  }
});

module.exports = router;
