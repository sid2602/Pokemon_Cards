import actions from '../actions'



const fetchPokemon = async()=>{
    const response = await fetch("https://api.pokemontcg.io/v1/cards?Count=5");
    const json = await response.json();

    return json;
}

export const getAllPokemons = () =>
    async(dispatch)=>{
        dispatch(actions.loading())

        try{
            const Pokemons = await fetchPokemon();
            dispatch(actions.addCards(Pokemons.cards));
        }catch(error){
            console.log(error)
            dispatch(actions.failure(error))
        }
        
        
    }

