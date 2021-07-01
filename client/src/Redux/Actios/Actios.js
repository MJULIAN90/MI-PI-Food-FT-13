import axios from "axios";

export const GET_RECIPES = async () => {
  let data = await axios("/recipes");
  return { type: "GET_RECIPES", payload: data.data };
};

export const GET_DIETS = async () => {
  let data = await axios("/diets");
  return { type: "GET_DIETS", payload: data.data };
};

export const ADDED_BY_USER_DB = () => {
  return async function (dispatch) {
    try {
      let data = await axios("/creates");
      return dispatch({ type: "ADDED_BY_USER_DB", payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GET_BY_ID = (idReceta) => {
  return async function (dispatch) {
    try {
      let data = await axios(`/recipes/${idReceta}`);
      return dispatch({ type: "GET_BY_ID", payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const REMOVE_FAVORITES = (id) => {
  return { type: "REMOVE_FAVORITES", payload: id };
};

export const SEARCHED = (data) => {
  return { type: "SEARCHED", payload: data };
};

export const ADD_FAVORITES = (data) => {
  return { type: "ADD_FAVORITES", payload: data };
};

export const ORDENAR_BY_NAME_ASC = () => {
  return { type: "ORDENAR_BY_NAME_ASC" };
};

export const ORDENAR_BY_NAME_DESC = () => {
  return { type: "ORDENAR_BY_NAME_DESC" };
};

export const ORDENAR_BY_SCORE = () => {
  return { type: "ORDENAR_BY_SCORE" };
};

export const DELETE_FILTERS = () => {
  return { type: "DELETE_FILTERS" };
};

export const DELETE_SEARCHED = () => {
  return { type: "DELETE_SEARCHED" };
};

export const ORDER_BY_DIET_GLUTENFREE = () => {
  return { type: "ORDER_BY_DIET_GLUTENFREE" };
};

export const ORDER_BY_DIET_KETOGENIC = () => {
  return { type: "ORDER_BY_DIET_KETOGENIC" };
};

export const ORDER_BY_DIET_VEGETARIAN = () => {
  return { type: "ORDER_BY_DIET_VEGETARIAN" };
};

export const ORDER_BY_DIET_LACTO_VEGETARIAN = () => {
  return { type: "ORDER_BY_DIET_LACTO_VEGETARIAN" };
};

export const ORDER_BY_DIET_OVO_VEGETARIAN = () => {
  return { type: "ORDER_BY_DIET_OVO_VEGETARIAN" };
};

export const ORDER_BY_DIET_VEGAN = () => {
  return { type: "ORDER_BY_DIET_VEGAN" };
};

export const ORDER_BY_DIET_PESCETARIAN = () => {
  return { type: "ORDER_BY_DIET_PESCETARIAN" };
};

export const ORDER_BY_DIET_PALEO = () => {
  return { type: "ORDER_BY_DIET_PALEO" };
};

export const ORDER_BY_DIET_PRIMAL = () => {
  return { type: "ORDER_BY_DIET_PRIMAL" };
};

export const ORDER_BY_DIET_WHOLE30 = () => {
  return { type: "ORDER_BY_DIET_WHOLE30" };
};

export const ORDER_BY_DIET_DAIRYFREE = () => {
  return { type: "ORDER_BY_DIET_DAIRYFREE" };
};

export const ORDER_BY_DIET_PALEOLITHIC = () => {
  return { type: "ORDER_BY_DIET_PALEOLITHIC" };
};
