import constants from '../constants';

const initial_state = {
    cards: [],
    loading: false,
    error: false,
    filter: [],
}


const Pokemon = (state = initial_state,action) =>{
    switch(action.type){
        case constants.POKEMON_LOADING:
            return{
                cards: [...state.cards],
                loading: true,
                error: false,
                filter: [...state.filter]
            }
        case constants.POKEMON_ADD_SUCCES:
            
            let cards = [...state.cards]

            action.cards.forEach((element)=>{
                cards.push(element)
            })

            return{
                cards,
                loading: false,
                error: false,
                filter: cards
            }
        
        case constants.POKEMON_FILTER:
            
        let arr = [...state.cards].map(item=>item.name.toLowerCase());
        
        const filtered = arr.filter((str)=>{
            return str.includes(action.text.toLowerCase());
        })
        
        let filteredArray = state.cards.filter(el => filtered.includes(el.name.toLowerCase()));

        

        return{
            ...state,
            filter: filteredArray
        }


        case constants.POKEMON_ADD_FAILURE:
            return{
                cards: [],
                loading: false,
                error: action.error,
                filter: []
            }

        case constants.POKEMON_RESET_FILTER:
            return{
                ...state,
                filter: [...state.cards]
            }
        default:
            return state;
    }
}

export default Pokemon