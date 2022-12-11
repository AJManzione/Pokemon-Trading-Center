const pokemonCaughtArray = ["152", "154"]
import React, { useState, useEffect, useRef } from 'react';
import pokeballOpen from '../../images/pokeball-open.png'
import pokeballClosed from '../../images/pokeball-closed.png'
//test data

export default function GenTwo() {

const [pokemonCaught, setPokemonCaughtStatus] = useState('uncaught');
const [data, setData] = useState([]);

const ref = useRef(null)

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
  fetch('./gen-2.json'
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
    <div className='gen-two-bg'>
      {console.log(ref.current)}
      <div className='container pt-3'>
        <ul className="list-group"> 
        {data.map((element, i) => {
          let isCaught = pokemonCaughtArray.includes(element.entry)
          return (
            
          <li className="list-group-item-success m-1" key={element.entry}>
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'>
                <li>
                  <img 
                    width='70px'
                    src={`../../assets/sprites/Gen-2-Sprites/${element.entry}.png`}
                    >
                  </img>
                </li>
                <li className='m-4'>
                  <h4>#{element.entry}</h4>
                </li>
              </div>
              <li><h4>{element.name}</h4></li>
              <li><h6>{element.type}</h6></li> 
              <li> 
                <img
                  id={`pokeballImage${element.entry}`}
                  className='pokeball'
                  src={pokemonCaughtArray.includes(element.entry) ? pokeballClosed : pokeballOpen}
                  onClick={() => pokeballClickHandler(element.entry)}
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

    // isCaught ? document.getElementById(`pokeballImage${element.entry}`).src = pokeballOpen : document.getElementById(`pokeballImage${element.entry}`).src = pokeballClosed