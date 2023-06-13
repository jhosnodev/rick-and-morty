import { useState } from "react";
import './normalize.css'
import "./App.css";
import Cards from "./components/Cards.jsx";
import Navbar from "./components/Navbar";
import characters from "./data.js";
function App() {
  const [character, setCharacter] = useState([]);
  const onSearch = () => {
    setCharacter([...character]);
  };
  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
