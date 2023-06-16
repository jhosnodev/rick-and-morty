import { useState } from "react";
import "./normalize.css";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar";
import axios from "axios";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

// import characters from "./data.js";
function App() {
  const [characters, setCharacters] = useState([]);
  const IDChecker = (id) => {
    //const result = characters.map((char) => char.id);
    return characters.map((char) => char.id).includes(Number(id));
  };
  function onSearch(id) {
    if (IDChecker(id)) {
      alert("ID repetido");
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  }
  const onClose = (id) => {
    const result = characters.filter((char) => char.id !== id);
    setCharacters(result);
  };

  return (
    <div className="App" id="app">
      <Navbar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
      <Footer />
    </div>
  );
}

export default App;
