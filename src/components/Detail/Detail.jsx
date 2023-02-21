import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './Detail.module.css'


function Detail() {
   const {detailId} = useParams();
   const [character, setCharacter] = useState({});
   const navigate = useNavigate();
   const handleClick = ()=> {
      navigate('/home');
   }


   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);


   return(
      <>
      <div>
         <button className={style.backHome} onClick={handleClick} >Back to home</button>
      </div>
            <div className={style.detail}>
                     <h1>{character.name}</h1>
                     <h2>Status: {character.status}</h2>
                     <h2>Species: {character.species}</h2>
                     <h2>Gender: {character.gender}</h2>
                     <h2>Origin: {character.origin?.name}</h2>
                  <>
                     <img src={character.image} alt={character.name} className={style.image}/>
                  </>
            </div>
      </>
   )

}

export default Detail;