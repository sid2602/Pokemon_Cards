
import constants from '../constants/index'

const addCards = cards => ({type: constants.POKEMON_ADD_SUCCES , cards});
const loading = () => ({type: constants.POKEMON_LOADING});
const failure = error => ({type: constants.POKEMON_ADD_FAILURE,error});

export default {
    addCards,
    loading,
    failure
}