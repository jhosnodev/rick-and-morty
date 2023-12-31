import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detail.css";
import { useState, useEffect } from "react";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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
    <main className="detail___container">
      <div className="detail___header">
        <h2>{character.name}</h2>
        <p>{character.id}</p>
      </div>
      <div className="detail___card">
        <div className="detail___card-info">
          <div className="card-info___tag">
            <h3>Status</h3>
            <p
              className={`bullet-status ${
                character.status === "Alive" ? "alive" : "no-alive"
              }`}
            >
              {character.status}
            </p>
          </div>
          <div className="card-info___tag">
            <h3>Especie</h3>
            <p>{character.species}</p>
          </div>
          <div className="card-info___tag">
            <h3>Tipo</h3>
            <p>{character.type === "" ? "????" : character.type}</p>
          </div>
          <div className="card-info___tag">
            <h3>Genero</h3>
            <p>{character.gender}</p>
          </div>
          <div className="card-info___tag">
            <h3>Origen</h3>
            <p>{character.origin?.name ? character.origin?.name : "?????"}</p>
          </div>
        </div>
        <img src={character.image} alt="" />
      </div>
    </main>
  );
};

export default Detail;
