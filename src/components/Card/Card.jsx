import "./Card.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const getIDToClose = () => {
    onClose(id);
  };
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  };
  useEffect((id) => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <article className="card">
      {" "}
      <div className="card___info-content">
        <div className="card___info-header">
          <p>{id}</p>
          <div>
            {isFav ? (
              <button onClick={handleFavorite}>❤️</button>
            ) : (
              <button onClick={handleFavorite}>🤍</button>
            )}{" "}
            <button onClick={getIDToClose}>X</button>
          </div>
        </div>
        <div className="card___info-body">
          <NavLink to={`detail/${id}`}>
            <h2>{name}</h2>
          </NavLink>
          {gender}
          <NavLink to={`detail/${id}`} className={"navbar___search-random-btn"}>
            <svg
              fill="#c8df6a"
              width="1rem"
              height="1rem"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              id="Glyph"
              version="1.1"
            >
              <path
                d="M29.946,15.675C27.954,9.888,22.35,6,16,6S4.046,9.888,2.054,15.675c-0.072,0.21-0.072,0.44,0,0.65  C4.046,22.112,9.65,26,16,26s11.954-3.888,13.946-9.675C30.018,16.115,30.018,15.885,29.946,15.675z M16,22c-3.309,0-6-2.691-6-6  s2.691-6,6-6s6,2.691,6,6S19.309,22,16,22z"
                id="XMLID_320_"
              />
            </svg>
            See more
          </NavLink>
        </div>
      </div>
      <img src={image} alt="" />
      <h2>{name}</h2>
    </article>
  );
}
export function mapStateToProps(state) {
  return { myFavorites: state.allCharacters };
}
export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
