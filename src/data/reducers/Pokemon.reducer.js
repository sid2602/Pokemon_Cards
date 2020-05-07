import constants from '../constants';

const initial_state = {
    cards: [],
    loading: false,
    error: false,
}


const Pokemon = (state = initial_state,action) =>{
    switch(action.type){
        case constants.POKEMON_LOADING:
            return{
                cards: [],
                loading: true,
                error: false
            }
        case constants.POKEMON_ADD_SUCCES:
            return{
                cards: action.cards,
                loading: false,
                error: false
            }
        case constants.POKEMON_ADD_FAILURE:
            return{
                cards: [],
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default Pokemon