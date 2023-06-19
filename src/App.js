import { useState, useEffect } from "react";
import "./normalize.css";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import Alert from "./components/Alert/Alert";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Detail from "./components/detail/Detail";
import { Route, Routes, useNavigate } from "react-router-dom";
import Error from "./components/error404/Error";
import Form from "./components/Form/Form";

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
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "jhosno.dev@gmail.com";
  const PASSWORD = "password11";
  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      console.log("login success");
      setAccess(!access)
      navigate('/home')
    }else{
      alert('email o contraseña no válidos!')
    }
  };
  const logout =() => setAccess(!access)
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  return (
    <div className="App" id="app">
      <Navbar onSearch={onSearch} logout={logout} access={access} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
