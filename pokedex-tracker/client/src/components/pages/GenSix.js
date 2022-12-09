import React, { useState, useEffect } from 'react';
import pokeballOpen from '../../images/pokeball-open.png'
import pokeballClosed from '../../images/pokeball-closed.png'

export default function GenSix() {

const [pokemonCaught, setPokemonCaughtStatus] = useState('uncaught');
const [data, setData] = useState([]);

const renderCaughtStatus = () => {
  if (pokemonCaught === 'uncaught') {
    return pokeballOpen;
  } return pokeballClosed;
};

const getData=()=>{
  fetch('./gen-6.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      setData(myJson)
    })
}
useEffect(()=>{
  getData()
},[])

  return (
    <div className='gen-six-bg'>
      <div className='container pt-3'>
        <ul className="list-group"> 
        {data.map((element, i) => {
          return (
          <li className="list-group-item-success m-1">
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'>
                <li><img width='70px'src={element.sprite}></img></li>
                <li className='m-4'>
                  <h4>#{element.entry}</h4>
                </li>
              </div>
              <li><h4>{element.name}</h4></li>
              <li><h6>{element.type}</h6></li> 
              <li> 
                <img
                  className='pokeball'
                  onClick={() => pokemonCaught === 'uncaught' ?setPokemonCaughtStatus('caught') : setPokemonCaughtStatus('uncaught') }
                  width='50px'
                  src={renderCaughtStatus()}
                >
                </img>
              </li>  
            </ul>
          </li>)
        })}
        </ul>
      </div>
    </div>
  );
}

