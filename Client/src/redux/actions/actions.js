import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actionsTypes";
import axios from "axios";
//recibe una propiedad que se llama payload
export const addFav = (character) => {
  const endpointLocal = "http://localhost:3001/rickandmorty/fav";
  //const endpointProduction = 'http://'

  return async (dispatch) => {
    try {
      const {data} = await axios.post(endpointLocal, character)
      return dispatch({
        type: ADD_FAV,
        payload: data,
      })
    } catch (error) {
      console.log(error.message)
    }
 /*    axios.post(endpointLocal, character).then(({ data }) => {
      console.log(data);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    }); */
  };
};
export const removeFav = (id) => {
  const endpointLocal = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpointLocal).then(({ data }) => {
      console.log(data);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
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
