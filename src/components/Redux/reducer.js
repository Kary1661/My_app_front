import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.myFavorites]
            }
        
        case DELETE_FAVORITE:
            return {
            ...state,
            myFavorites: state.myFavorites.filter(character => character.id!== action.payload)
            }
        
        case FILTER:
            const { allCharacters } = state;
            const allCharsFiltered = allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente"
                    ? allCharacters.sort((a, b) => a.id < b.id)
                    : allCharacters.sort((a, b) => a.id > b.id)
            }    
                    
        default:
            return {...state}
    }
}

export default reducer;