import actions from '../actions'

let currentPage = 1;

const fetchPokemon = async()=>{
    const response = await fetch(`https://api.pokemontcg.io/v1/cards?page=${currentPage++}&pageSize=4`);
    const json = await response.json();

    return json;
}

export const getAllPokemons = () =>
    async(dispatch)=>{
        dispatch(actions.loading())
        try{
            const Pokemons = await fetchPokemon();
            dispatch(actions.addCards(Pokemons.cards))
        }catch(error){
            dispatch(actions.failure(true))
        } 
        
    }

