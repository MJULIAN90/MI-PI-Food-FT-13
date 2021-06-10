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
      `${URL}complexSearch?addRecipeInformation=true&${API_KEY}&number=1`
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
    //let responseApi = await axios(`${URL}${idReceta}/information?${API_KEY}`);

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

    let prueba = {
      img: "https://spoonacular.com/recipeImages/716426-556x370.jpg",
      title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      type_dish: ["side dish"],
      type_diet: [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan",
        "vegeterian",
      ],
      summary:
        'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.',
      Puntuation: 99,
      lvl_healthScore: 76,
      instructions:
        "<ol><li><span></span>Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"</li><li>Heat 1T butter and 1T oil in a large skillet over medium heat. Add garlic and the white and light green pieces of scallion. Sauté about a minute.</li><li>Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.</li><li>Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. Let it sit for about two minutes—so the rice can get toasted and a little crispy. Add the peas and broccoli and stir again. Drizzle soy sauce and toasted sesame oil over rice.</li><li>Cook for another minute or so and turn off heat. Add chopped scallion tops and toss.</li><li>I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.</li><li>Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.</li></ol>",
    };
    // original return res.send(infoDetail);
    res.send(prueba);
  }
});

module.exports = router;
