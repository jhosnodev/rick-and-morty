import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <p>{character.id}</p>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.gender}</p>
      <p>{character?.orign?.name}</p>

      <img src={character.image} alt="" />
    </div>
  );
};

export default Detail;
