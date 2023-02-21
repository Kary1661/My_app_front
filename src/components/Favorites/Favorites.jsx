import { useSelector } from "react-redux";
import style from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      {myFavorites.map((character) => {
        return (
          <div className={style.favContainer}>
            <img
              src={character.image}
              alt={character.name}
              className={style.imageContainer}
            />
            <div>Name: {character.name}</div>
            <div>Specie: {character.species}</div>
            <div>Gender: {character.gender}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
