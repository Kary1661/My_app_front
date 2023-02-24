import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
      <div>
         <div>
           <button className={style.backHome} onClick={handleClick}>
             Back to home
           </button>
         </div>
        {
          myFavorites.map((character) => {
            return (
              <div className={style.containerFav}>
                <img src={character.image} alt={character.name} className={style.imageContainer} />
                  <h2>Name: {character.name}</h2>
                  <h2>Specie: {character.species}</h2>
                  <h2>Gender: {character.gender}</h2>
              </div>
            );
          })}
      </div>
  );
              
};
          
    


export default Favorites;
