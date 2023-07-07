import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actionsTypes";
//recibe una propiedad que se llama payload
export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};
export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
export const filterFav = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderFav = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
