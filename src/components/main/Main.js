import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {getAllPokemons} from '../../data/operations/operations'

import {MainContainer,Card,Button} from './Main.css'
import Loading from '../loading'


const Main = ({cards,loading,getAllPokemons}) =>{

    useEffect(()=>{
        getAllPokemons();
        
    },[])


    const handleOnClick = () =>{
        getAllPokemons();
    }


    const items = cards.length<0? <div></div> : cards.map(item=> (

        <Card key={item.id}>
            <header>
                <h2>{item.name}</h2>
                <p>Nr: {item.nationalPokedexNumber}</p>
            </header>
            <main>
                <img src={item.imageUrlHiRes} alt={item.name}></img>
                <p><span className="bold">Supertype:</span> {item.supertype}</p>
                <p><span className="bold">Subtype:</span> {item.subtype}</p>
                <p><span className="bold">Rarity:</span> {item.rarity}</p>
            </main>
        </Card>

        ))
        

    return(
        <MainContainer>
            {items}
            <footer>
                {
                    
                    loading? <Loading/> : <Button onClick={handleOnClick}>Load more</Button>
                    
                }
            </footer>
        </MainContainer>
    )
}

const mapStateToProps = (state) =>({
    cards: state.Pokemon.filter,
    loading: state.Pokemon.loading
})

const mapDispatchToProps = (dispatch)=>({
    getAllPokemons: () =>dispatch(getAllPokemons())
})

export default connect(mapStateToProps,mapDispatchToProps)(Main);