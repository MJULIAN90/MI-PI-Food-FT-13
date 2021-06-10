const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");

const diets = [
  "glutenFree",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Vegetarian",
  "Ovo-Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
  "Whole30",
  "dairyFree",
];

let addDiets = async () => {
  setTimeout(loadings, 1000);

  function loadings() {
    diets.map((e) => {
      Diet.findOrCreate({ where: { Name: e } });
    });
    console.log("Diets loadings");
  }
};

addDiets();

/* 
GET /types:
- Obtener todos los tipos de dieta posibles
- En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
*/
router.get("/", async (req, res) => {
  let db = await Diet.findAll();

  res.send(db.map((e) => e.Name));
});
module.exports = router;
