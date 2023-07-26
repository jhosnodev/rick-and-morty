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
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions/actions";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Error from "./components/error404/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/favorites/favorites";

// import characters from "./data.js";
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const [alert, setAlert] = useState({});
  const [access, setAccess] = useState(false);


  const IDChecker = (id) => {
    //const result = characters.map((char) => char.id);
    return characters.map((char) => char.id).includes(Number(id));
  };

  async function onSearch(id) {
    if (IDChecker(id)) {
      setAlert({
        message: "ID repetido",
        type: "error",
      });
    } else {
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        //const data = response.data
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data].reverse());
        } else {
          setAlert({
            message: "¡No hay personajes con este ID!",
            type: "error",
          });
        }
      } catch ({message}) {
        setAlert({
          message: message,
          type: "error",
        });
      }
      //! promesas
 /*      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data].reverse());
          } else {
            setAlert({
              message: "¡No hay personajes con este ID!",
              type: "error",
            });
          }
        })
        .catch(({ message }) => {
          setAlert({
            message: message,
            type: "error",
          });
        }); */
    }
  }

  const onClose = (id) => {
    const result = characters.filter((char) => char.id !== id);
    dispatch(removeFav(id));
    setCharacters(result);
  };

  /*   const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(!access);
      navigate("/home");
    } else {
      setAlert({
        message: "¡Email o contraseña inválidos!",
        type: "warning",
      });
    }
  }; */

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      if (access) {
        setAccess(access);
      } else {
        setAlert({
          message: "¡Email o contraseña inválidos!",
          type: "warning",
        });
      }
      access && navigate("/home");
    });
  }

  const logout = () => setAccess(!access);

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  useEffect(() => {}, [alert]);


  return (
    <div className="App" id="app">
      {pathname !== "/" ? (
        <Navbar onSearch={onSearch} logout={logout} access={access} setAlert= {setAlert} />
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
        <Route
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        />
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
