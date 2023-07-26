import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/actionsTypes";
const stateInitial = {
  characters: [],
  allCharacters: [],
};
const rootReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
  /*     return {
        ...state,
        characters: [...state.characters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      }; */
    case REMOVE_FAV:
      return { ...state, characters: action.payload };
   /*    let remove = state.characters.filter(
        (character) => parseInt(character.id) !== action.payload
      );
      return {
        ...state,
        characters: remove,
        allCharacters: remove,
      }; */
    case FILTER:
      //let filter = [...state.allCharacters];

      /*       let genderFilter = state.allCharacters.filter((char) => char.gender === action.payload);
      return {
        characters: genderFilter,
      }; */

      return {
        ...state,
        characters:
          action.payload === "all"
            ? [...state.allCharacters]
            : state.allCharacters.filter((e) => e.gender === action.payload),
      };

    case ORDER:
      // let order = [...state.allCharacters];
      return {
        ...state,
        characters: state.allCharacters.sort((a, b) =>
          action.payload === "A" ? a.id - b.id : b.id - a.id
        ),
      };
    case "RESET":
      return {
        ...state,
        characters: [...state.allCharacters],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
