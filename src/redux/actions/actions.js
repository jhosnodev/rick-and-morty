import { ADD_FAV, REMOVE_FAV } from "./actionsTypes";
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
