import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    allFavs: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            const addFav = [...state.allCharacters, action.payload]
            return {
                ...state,
                myFavorites: [...addFav],
                allCharacters: [...addFav]
            }
        
        case DELETE_FAVORITE:
            const deleteFav = state.allCharacters.filter(character => character.id !== action.payload);
            return {
            ...state,
            myFavorites: [...deleteFav],
            allCharacters: [...deleteFav]
            }
        
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(character => character.gender === action.payload),
            }

        case ORDER:
            let orderFav;
            if (action.payload === "Ascendente") {
                orderFav = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1);
            } else {
                orderFav = state.myFavorites.sort((a, b) => a.id < b.id ? 1 : -1);
            }
            return {
                ...state,
                myFavorites: [...orderFav],
            }
        case 'RESET':
            return{
                ...state,
                myFavorites: state.allCharacters
            }  
                    
        default:
            return {...state}
    }
}

export default reducer;