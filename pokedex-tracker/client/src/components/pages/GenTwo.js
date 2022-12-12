let pokemonCaughtArray =[]
import React, { useState, useEffect, useRef } from 'react';
import pokeballOpen from '../../images/pokeball-open.png'
import pokeballClosed from '../../images/pokeball-closed.png'
import Tada from 'react-reveal/Tada'
import { useMutation, useQuery } from '@apollo/client';
import { CATCH_POKEMON, UNCATCH_POKEMON } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';


const username = localStorage.getItem('username')


export default function  GenTwo() {


const [catchPokemon, { catchPokemonError, catchPokemonData }] = useMutation(CATCH_POKEMON);

const [unCatchPokemon, { error, datum }] = useMutation(UNCATCH_POKEMON);


const { loading, data: userValue } = useQuery(QUERY_USER, {
  variables: { username: username },
  
});

const [userData, setUserData] = useState({
  pokemonCaught: [],
});

useEffect(() => {
  if (!loading && userValue ) {
    setUserData({
      pokemonCaught: userValue?.user?.pokemonCaught?.map((caught) => caught.entry)
    });
  }
}, [ loading, userValue ]);

const [data, setData] = useState([]);

console.log(userData.pokemonCaught)

pokemonCaughtArray = userData.pokemonCaught

async function pokeballClickHandler(entry){
  
  
  if(userData.pokemonCaught.includes(entry)){
    const index = pokemonCaughtArray.indexOf(entry)
    pokemonCaughtArray.splice(index, 1)
    document.getElementById(`pokeballImage${entry}`).src = pokeballOpen
  }else{
    setUserData([...userData.pokemonCaught, entry])
    try{
      const {data} = await catchPokemon({
        variables:
        {username: username,
        entry: entry}
      })
    }catch(e){
      console.error(e)
    }
    document.getElementById(`pokeballImage${entry}`).src = pokeballClosed
  }
  console.log(userData.pokemonCaught)
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
                <Tada duration={2500}> 
                <img
                  id={`pokeballImage${element.entry}`}
                  className='pokeball'
                  src={pokemonCaughtArray.includes(element.entry) ? pokeballClosed : pokeballOpen}
                  onClick={() =>pokeballClickHandler(element.entry)}
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

