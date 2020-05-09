import React,{useState,useRef} from 'react';
import {HeaderContainer,Input,Label} from './Header.css'

import {connect} from 'react-redux'
import actions from '../../data/actions'



const Header = ({filter,resetFilter}) => {

    const [labelActive,setLabelActive] = useState(false);
    
    const input = useRef(null);
    
    const handleInput = () =>{
      if(input.current.value !== "" ){
        setLabelActive(true)
        filter(input.current.value)
      }else{
        setLabelActive(false)
        resetFilter()
      }
    }

    return ( 
       <HeaderContainer>
           <h2><span style={{color: 'goldenrod'}}>Pokemon </span><span style={{color: 'maroon'}}>catalog</span></h2>
           <div style={{position: 'relative'}}>
             <Input type="text" id="search" ref={input} onChange={handleInput}/>
             <Label htmlFor="search" active = {labelActive}>search</Label>
           </div>
            
       </HeaderContainer>
     );
}
 

  
  const mapDispatchToProps = (dispatch) =>  ({
      filter: text => dispatch(actions.filter(text)),
      resetFilter: ()=>dispatch(actions.resetFilter())
  })

  

export default connect(null,mapDispatchToProps)(Header);