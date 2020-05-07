import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {getAllPokemons} from '../../data/operations/operations'
const PokemonContainer = ({getAllPokemons}) =>{

    useEffect(()=>{
        getAllPokemons();
    },[])

    return(
        <>
            POKEMON
        </>
    )
}

const mapDispatchToProps = (dispatch)=>({
    getAllPokemons: () =>dispatch(getAllPokemons())
})

export default connect(null,mapDispatchToProps)(PokemonContainer);