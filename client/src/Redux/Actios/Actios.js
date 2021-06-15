import axios from "axios";

export const GET_RECIPES = async () => {
  let data = await axios("http://localhost:3001/recipes");
  return { type: "GET_RECIPES", payload: data.data };
};

export const GET_DIETS = async () => {
  let data = await axios("http://localhost:3001/diets");
  return { type: "GET_DIETS", payload: data.data };
};

/* 
? revisar 
export const GET_BY_ID = async (idReceta) => {
  let data = await axios(`http://localhost:3001/recipes/${idReceta}`);
  return { type: "GET_BY_ID", payload: data.data };
}; */

//? que tiene de malo
/*  export const GET_BY_ID = (idReceta) => {
  console.log(idReceta);
  axios(`http://localhost:3001/recipes/${idReceta}`).then((response) => {
    console.log(response.data);
    return { type: "GET_BY_ID", payload: response.data };
  });
}; 
 */
export const GET_BY_ID = (idReceta) => {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/recipes/${idReceta}`)
      .then((response) => {
        dispatch({
          type: "GET_BY_ID",
          payload: response.data,
        });
      });
  };
};

export const ORDENAR_BY_NAME_ASC = (data) => {
  return { type: "ORDENAR_BY_NAME_ASC", payload: data };
};

export const ORDENAR_BY_NAME_DESC = (data) => {
  return { type: "ORDENAR_BY_NAME_DESC", payload: data };
};

export const ORDENAR_BY_SCORE = (data) => {
  return { type: "ORDENAR_BY_SCORE", payload: data };
};

export const DELETE_FILTERS = () => {
  return { type: "DELETE_FILTERS" };
};

export const ORDER_BY_DIET_GLUTENFREE = (data) => {
  return { type: "ORDER_BY_DIET_GLUTENFREE", payload: data };
};

export const ORDER_BY_DIET_KETOGENIC = (data) => {
  return { type: "ORDER_BY_DIET_KETOGENIC", payload: data };
};

export const ORDER_BY_DIET_VEGETARIAN = (data) => {
  return { type: "ORDER_BY_DIET_VEGETARIAN", payload: data };
};

export const ORDER_BY_DIET_LACTO_VEGETARIAN = (data) => {
  return { type: "ORDER_BY_DIET_LACTO_VEGETARIAN", payload: data };
};

export const ORDER_BY_DIET_OVO_VEGETARIAN = (data) => {
  return { type: "ORDER_BY_DIET_OVO_VEGETARIAN", payload: data };
};

export const ORDER_BY_DIET_VEGAN = (data) => {
  return { type: "ORDER_BY_DIET_VEGAN", payload: data };
};

export const ORDER_BY_DIET_PESCETARIAN = (data) => {
  return { type: "ORDER_BY_DIET_PESCETARIAN", payload: data };
};

export const ORDER_BY_DIET_PALEO = (data) => {
  return { type: "ORDER_BY_DIET_PALEO", payload: data };
};

export const ORDER_BY_DIET_PRIMAL = (data) => {
  return { type: "ORDER_BY_DIET_PRIMAL", payload: data };
};

export const ORDER_BY_DIET_WHOLE30 = (data) => {
  return { type: "ORDER_BY_DIET_WHOLE30", payload: data };
};

export const ORDER_BY_DIET_DAIRYFREE = (data) => {
  return { type: "ORDER_BY_DIET_DAIRYFREE", payload: data };
};

export const ORDER_BY_DIET_PALEOLITHIC = (data) => {
  return { type: "ORDER_BY_DIET_PALEOLITHIC", payload: data };
};
