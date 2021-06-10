let initialState = {
  recipes: [],
  diets: [],
  cache_data: [],
};

// mirar otrar alternativa para no tener tantos casos por dieta
function rootReducer(state = initialState, actions) {
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
    case "ORDENAR_BY_NAME_ASC":
      return {
        ...state,
        cache_data: state.recipes.sort((a, b) => (a.title > b.title ? 1 : -1)),
      };

    case "ORDENAR_BY_NAME_DESC":
      //items.sort( (a, b) => (a.title < b.title) ? 1 : -1)
      return {
        ...state,
        cache_data: state.recipes.sort((a, b) => (a.title < b.title ? 1 : -1)),
      };

    case "ORDENAR_BY_SCORE":
      return {
        ...state,
        cache_data: state.recipes.sort((a, b) =>
          a.spoonacularScore < b.spoonacularScore ? 1 : -1
        ),
      };

    case "DELETE_FILTERS":
      return {
        ...state,
        cache_data: [],
      };

    case "ORDER_BY_DIET_GLUTENFREE":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "GLUTENFREE");
        }),
      };
    case "ORDER_BY_DIET_KETOGENIC":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "KETOGENIC");
        }),
      };

    case "ORDER_BY_DIET_VEGETARIAN":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "VEGETARIAN");
        }),
      };
    case "ORDER_BY_DIET_LACTO_VEGETARIAN":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "LACTO-VEGETARIAN");
        }),
      };
    case "ORDER_BY_DIET_OVO_VEGETARIAN":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "OVO-VEGETARIAN");
        }),
      };
    case "ORDER_BY_DIET_VEGAN":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "VEGAN");
        }),
      };
    case "ORDER_BY_DIET_PESCETARIAN":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "PESCETARIAN");
        }),
      };
    case "ORDER_BY_DIET_PALEO":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "PALEO");
        }),
      };
    case "ORDER_BY_DIET_PRIMAL":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "PRIMAL");
        }),
      };
    case "ORDER_BY_DIET_WHOLE30":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "WHOLE30");
        }),
      };
    case "ORDER_BY_DIET_DAIRYFREE":
      return {
        ...state,
        cache_data: state.recipes.filter((e) => {
          return e.diets.find((e) => e === "DAIRYFREE");
        }),
      };

    default:
      return state;
  }
}

export default rootReducer;
