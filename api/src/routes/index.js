const { Router } = require("express");
const router = Router();

// Importar todos los routers;

const recipe = require("./recipe");
const diets = require("./diets");
const recipes = require("./recipes");

// Configurar los routers

router.use("/recipe", recipe);
router.use("/diets", diets);
router.use("/recipes", recipes);

module.exports = router;
