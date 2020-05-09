
import constants from '../constants/index'

const addCards = cards => ({type: constants.POKEMON_ADD_SUCCES , cards});
const loading = () => ({type: constants.POKEMON_LOADING});
const failure = error => ({type: constants.POKEMON_ADD_FAILURE,error});
const filter = text => ({type: constants.POKEMON_FILTER,text})
const resetFilter = () =>({type: constants.POKEMON_RESET_FILTER})


export default {
    addCards,
    loading,
    failure,
    filter,
    resetFilter
}