import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../Redux/actions";

function Card({ name, species, gender, image, onClose, detailId }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(detailId));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({ name, species, gender, image, onClose, detailId })
        );
      }
    };
    
    useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.detailId === detailId) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);


  return (
    <div className={style.cardContainer}>
      <div className={style.contAll}>
        <h1 className={style.cardId}>Name: {name}</h1>
        <h1 className={style.cardId}>Specie: {species}</h1>
        <img src={image} alt={name} className={style.imageContainer} />
        <div>
          <button className={style.btnDelete} onClick={onClose}>Close</button>
          <Link to={`/detail/${detailId}`}>
            <button className={style.btnDelete}>View More</button>
          </Link>
        </div>
        {
          isFav ? (
           <button onClick={handleFavorite}>❤️</button>
           ) : (
           <button onClick={handleFavorite}>🤍</button>
        )
      }
      </div>
    </div>
  );
}

export default Card;
