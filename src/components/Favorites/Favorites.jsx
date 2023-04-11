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
            <select onChange={handleOrder} className={style.btnOrder}>
              <option value="Ascendent">Ascendent</option>
              <option value="Descendent">Descendent</option>
            </select>
            <select onChange={handleFilter} className={style.btnFilter}>
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
        <div className={style.containerFav}>
        {
          myFavorites.map((character) => {
            return (
              <Favorites 
                image={character.image}
                Name={character.name}
                Specie={character.species}
                Gender={character.gender}
              />
            );
          })}
        </div>
      </div>
  );
              
};
          
    


export default Favorites;
