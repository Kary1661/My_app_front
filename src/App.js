import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '871ddf2fe5cb.24512139963e241d8a69';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const username = "kary@soyhenry.com";
  const password = "kary123";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  }

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(response => response.data)
    .then(data => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("NO hay personajes con ese ID!!");
      }
    })
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div>
      {
        location.pathname !== "/" && <Nav onSearch={onSearch} />
      }
      <Routes>
        
        <Route path="/" element={ <Form login={login}/> }
        />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} 
        />
        <Route path="/about" element={<About /> }
        />
        <Route path="/detail/:id" element={<Detail />} 
        />
        <Route path="/favorites" element={<Favorites />} 
        />
      
      </Routes>
    </div>
  
  )

}

export default App;
