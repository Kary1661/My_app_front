import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import { useNavigate, Link } from "react-router-dom";

function Nav(props) {
  const { onSearch } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={style.nav}>
      <div className={style.containLetter} onClick={handleClick}></div>
      <div>
        <Link to="/home" className={style.btnHome}>Home</Link>
        <Link to="/about" className={style.btnAb}>
          About
        </Link>
        <Link to="/favorites" className={style.btnFav}>
          Favorites
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
