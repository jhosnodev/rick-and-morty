import React from "react";

import Card from "../Card/Card";
import "./Favorites.css";
import { filterFav, orderFav } from "../../redux/actions/actions";
import { useDispatch, connect, useSelector } from "react-redux";
import { useState } from "react";

const Favorites = ({ onClose, myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(orderFav(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterFav(e.target.value));
    setAux(!aux);
  };
  const handleReset = (e) => {
    dispatch({ type: "RESET" });
  };

  return (
    <main className="favorites">
      <div className="favorite___sort-options">
        <label htmlFor="order">
          Order
          <select name="order" id="order" onChange={handleOrder}>
            <option>Select a option</option>
            <option value={"A"}>Ascendente</option>
            <option value={"D"}>Descendente</option>
          </select>
        </label>
        <label htmlFor="filter">
          Filter
          <select name="filter" id="filter" onChange={handleFilter}>
            <option>Select a gender</option>
            <option value={"Female"}>Female</option>
            <option value={"Male"}>Male</option>
            <option value={"Genderless"}>Genderless</option>
            <option value={"unknown"}>Unknow</option>
          </select>
        </label>
        <button onClick={handleReset}>Reset </button>
      </div>
      <div className="favorite___cards-container">
        {myFavorites.length === 0 ? (
          <div>
            <p>Te falta odio</p>
          </div>
        ) : (
          myFavorites?.map((character) => (
            <Card
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              key={character.id}
              onClose={onClose}
            />
          ))
        )}
      </div>
    </main>
  );
};
//export default Favorites;

export function mapStateToProps(state) {
  return { myFavorites: state.characters };
}

export default connect(mapStateToProps, null)(Favorites);
