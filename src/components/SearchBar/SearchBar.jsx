import { useState } from "react";
import style from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState();

  const handleChange = (event) => {
    setCharacter(event.target.value);
    
    if (!character.includes(event.target.name)) {
      setCharacter({
        ...character,
        character: [...character, event.target.name],
      });
    } else {
      setCharacter({
        ...character,
        character: character.filter((event) => event !== event.target.name),
      });
    }
  };

  

  return (
    <>
      <input 
        type="search"
        placeholder="Search character"
        onChange={handleChange}
        value={character} 
        className={style.inpt}/>
        <button 
        onClick={() => onSearch(character)} 
        className={style.btnAdd}>
        Add</button>
      </>
  )
}

export default SearchBar;
