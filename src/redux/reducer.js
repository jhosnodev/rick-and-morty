import { ADD_FAV, REMOVE_FAV } from "./actions/actionsTypes";
const stateInitial = {
  characters: [],
};
const rootReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state, 
        characters: [...state.characters, action.payload]
      }
    case REMOVE_FAV:
      return {
        ...state, 
        characters: state.characters.filter(character => character.id !== action.payload)
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
