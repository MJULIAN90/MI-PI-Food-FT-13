import axios from "axios";

export const GET_RECIPES = async () => {
  let data = await axios("http://localhost:3001/recipes");
  return { type: "GET_RECIPES", payload: data.data };
};

export const GET_DIETS = async () => {
  let data = await axios("http://localhost:3001/diets");
  return { type: "GET_DIETS", payload: data.data };
};

export const ADDED_BY_USER_DB = async () => {
  let data = await axios("http://localhost:3001/recipes/creates");
  return { type: "ADDED_BY_USER_DB", payload: data.data };
};

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

export const REMOVE_FAVORITES = (id) => {
  console.log(id);
  console.log(typeof id);
  return { type: "REMOVE_FAVORITES", payload: id };
};

export const SEARCHED = (data) => {
  return { type: "SEARCHED", payload: data };
};

export const ADD_FAVORITES = (data) => {
  return { type: "ADD_FAVORITES", payload: data };
};

export const DELETE_BY_ID = () => {
  return { type: "DELETE_BY_ID" };
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

export const DELETE_SEARCHED = () => {
  return { type: "DELETE_SEARCHED" };
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
