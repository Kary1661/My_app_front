import { useSelector, useDispatch } from "react-redux";
import style from "./Favorites.module.css";
import { useNavigate } from "react-router-dom";
import { orderCards, filterCards } from "../Redux/actions";


const Favorites = () => {
  const { myFavorites } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
      <div>
         <div>
            <select onChange={handleOrder}>
              <option value="order" disabled='disabled'>Order By</option>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
            <option value="Genderless">Genderless</option>
            </select>
         </div>
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
                  <h1>Name: {character.name}</h1>
                  <h1>Specie: {character.species}</h1>
                  <h1>Gender: {character.gender}</h1>
              </div>
            );
          })}
      </div>
  );
              
};
          
    


export default Favorites;
