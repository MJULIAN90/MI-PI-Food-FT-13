// cache data -- guardo los filtros de busqueda
// createByUserDb -- guardar las recetas de la db creados anteriormente
// searched-- los que busco en el buscador
// recipe_id -- para guardar el de la id y lo renderizo

let initialState = {
  recipes: [],
  diets: [],
  cache_data: [],
  createByUserDb: [],
  searched: [],
  recipe_id: undefined,
  favorites: [],
};

function rootReducer(state = initialState, actions) {
  let data = [...state.recipes, ...state.createByUserDb];
  switch (actions.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: actions.payload,
      };

    case "GET_DIETS":
      return {
        ...state,
        diets: actions.payload,
      };

    case "GET_BY_ID":
      return {
        ...state,
        recipe_id: actions.payload,
      };

    case "ADD_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.concat(actions.payload),
      };

    case "REMOVE_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.id !== actions.payload
        ),
      };

    case "ADDED_BY_USER_DB":
      return {
        ...state,
        createByUserDb: actions.payload,
      };

    case "ORDENAR_BY_NAME_ASC":
      return {
        ...state,
        cache_data: actions.payload.sort((a, b) =>
          a.title > b.title ? 1 : -1
        ),
      };

    case "ORDENAR_BY_NAME_DESC":
      return {
        ...state,
        cache_data: actions.payload.sort((a, b) =>
          a.title < b.title ? 1 : -1
        ),
      };

    case "ORDENAR_BY_SCORE":
      return {
        ...state,
        cache_data: actions.payload.sort((a, b) =>
          a.spoonacularScore < b.spoonacularScore ? 1 : -1
        ),
      };

    case "DELETE_FILTERS":
      return {
        ...state,
        cache_data: [],
      };

    case "SEARCHED":
      return {
        ...state,
        searched: actions.payload,
      };

    case "DELETE_SEARCHED":
      return {
        ...state,
        searched: [],
      };

    case "ORDER_BY_DIET_GLUTENFREE":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "gluten free");
        }),
      };

    case "ORDER_BY_DIET_KETOGENIC":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "ketogenic");
        }),
      };

    case "ORDER_BY_DIET_VEGETARIAN":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "vegeterian");
        }),
      };

    case "ORDER_BY_DIET_LACTO_VEGETARIAN":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e.includes("lacto" && "vegetarian"));
        }),
      };

    case "ORDER_BY_DIET_OVO_VEGETARIAN":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e.includes("ovo vegetarian"));
        }),
      };

    case "ORDER_BY_DIET_VEGAN":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "vegan");
        }),
      };

    case "ORDER_BY_DIET_PESCETARIAN":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "pescatarian");
        }),
      };

    case "ORDER_BY_DIET_PALEO":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e.includes("paleo"));
        }),
      };

    case "ORDER_BY_DIET_PRIMAL":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "primal");
        }),
      };

    case "ORDER_BY_DIET_WHOLE30":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "whole30");
        }),
      };

    case "ORDER_BY_DIET_DAIRYFREE":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "dairy free");
        }),
      };

    case "ORDER_BY_DIET_PALEOLITHIC":
      return {
        ...state,
        cache_data: data.filter((e) => {
          return e.diets.find((e) => e === "paleolithic");
        }),
      };

    default:
      return state;
  }
}

export default rootReducer;
