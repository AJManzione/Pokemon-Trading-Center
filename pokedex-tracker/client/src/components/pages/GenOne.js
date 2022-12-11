const pokemonCaughtArray = []
import React, { useState, useEffect } from 'react';
import pokeballOpen from '../../images/pokeball-open.png';
import pokeballClosed from '../../images/pokeball-closed.png';
import Tada from 'react-reveal/Tada'


export default function GenOne() {

const [pokemonCaught, setPokemonCaughtStatus] = useState('uncaught');
const [data, setData] = useState([]);

function pokeballClickHandler(entry){
  
  if(pokemonCaughtArray.includes(entry)){
    const index = pokemonCaughtArray.indexOf(entry)
    pokemonCaughtArray.splice(index, 1)
    document.getElementById(`pokeballImage${entry}`).src = pokeballOpen
  }else{
    pokemonCaughtArray.push(entry)
    document.getElementById(`pokeballImage${entry}`).src = pokeballClosed
  }
  console.log(pokemonCaughtArray)
}

const getData=()=>{
  fetch('./gen-1.json'
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
    <div className='gen-one-bg'>
      <div className='container pt-3'>
        <ul className="list-group"> 
        {data.map((element, i) => {
          return (
          <li className="list-group-item-success m-1" key={element.entry}>
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'>
                <li>
                  <img 
                    width='70px'
                    src={`../../assets/sprites/Gen-1-Sprites/${element.entry}.png`}>
                    </img>
                  </li>
                <li className='m-4'>
                  <h4
                    style={{fontSize: '2.5vw'}}>
                      #{element.entry}
                  </h4>
                </li>
              </div>
              <li>
                <h4
                  style={{fontSize: '2.5vw'}}>
                  {element.name}
                </h4>
              </li>
              <li>
                <h6
                  style={{fontSize: '1.7vw'}}>
                  {element.type}
                </h6>
              </li> 
              <li>
              <Tada duration={2500}> 
              <img
                  id={`pokeballImage${element.entry}`}
                  className='pokeball'
                  src={pokemonCaughtArray.includes(element.entry) ? pokeballClosed : pokeballOpen}
                  onClick={() => pokeballClickHandler(element.entry)}
                  >
                </img>
              </Tada>
              </li>  
            </ul>
          </li>)
        })}
        </ul>
      </div>
    </div>
  );
}

