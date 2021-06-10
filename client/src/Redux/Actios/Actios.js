import axios from "axios";

export const GET_RECIPES = async () => {
  let data = await axios("http://localhost:3001/recipes");
  console.log(data.data);
  return { type: "GET_RECIPES", payload: data.data };
};

export const GET_DIETS = async () => {
  let data = await axios("http://localhost:3001/diets");
  console.log(data.data);
  return { type: "GET_DIETS", payload: data.data };
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

// aca por id
//http://localhost:3001/recipes/:id
//export const GET_BY_ID = () => {};
