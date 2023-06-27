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
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Error from "./components/error404/Error";
import Form from "./components/Form/Form";

// import characters from "./data.js";
function App() {
  const [characters, setCharacters] = useState([]);
  const [alert, setAlert] = useState({});
  const IDChecker = (id) => {
    //const result = characters.map((char) => char.id);
    return characters.map((char) => char.id).includes(Number(id));
  };
  function onSearch(id) {
    if (IDChecker(id)) {
  
      setAlert({
        message:"ID repetido",
        type: "error",
      })
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data].reverse());
          } else {

            setAlert({
              message: "¡No hay personajes con este ID!",
              type: "error",
            })
          }
        })
        .catch(({ message }) => {
          setAlert({
            message: message,
            type: "error",
          });
        });
    }
  }
  const onClose = (id) => {
    const result = characters.filter((char) => char.id !== id);
    setCharacters(result);
  };
  const [access, setAccess] = useState(false);
  const EMAIL = "jhosno.dev@gmail.com";
  const PASSWORD = "password11";
  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    } else {
      setAlert({
        message: "¡Email o contraseña inválidos!",
        type: "warning",
      });
    }
  };

  const navigate = useNavigate();
  const logout = () => setAccess(false);
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  useEffect(() => {}, [alert]);
  const { pathname } = useLocation();

  return (
    <div className="App" id="app">
      {pathname !== "/" ? (
        <Navbar onSearch={onSearch} logout={logout} access={access} />
      ) : null}
      {alert.message ? (
        <Alert message={alert.message} type={alert.type} setAlert={setAlert} />
      ) : (
        ""
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="home/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
