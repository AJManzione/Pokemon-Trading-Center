import React, { useState, useEffect, useRef } from 'react';
import pokeballOpen from '../../images/pokeball-open.png'
import pokeballClosed from '../../images/pokeball-closed.png'
import Tada from 'react-reveal/Tada'
import { useMutation, useQuery } from '@apollo/client';
import { CATCH_POKEMON, UNCATCH_POKEMON } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';


export default function  GenEight() {

// fetching all pokemon from JSON Data
const [JSONdata, setJSONData] = useState([]);

const getData=()=>{
  fetch('./gen-8.json'
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
      setJSONData(myJson)
    })
}
useEffect(()=>{
  getData()
},[])
// end of fetch


// username
const currentUser = localStorage.getItem('username')


// queries and mutations
const [catchPokemon, { catchErr, catchData }] = useMutation(CATCH_POKEMON);
const [unCatchPokemon, { unCatchErr, unCatchData }] = useMutation(UNCATCH_POKEMON);

const { loading, data: userValue } = useQuery(QUERY_USER, {
  variables: { username: currentUser },
  
});


// users pokemon caught state
const [userData, setUserData] = useState({
  pokemonCaught: [],
});


//  setting the state of pokemon caught
useEffect(() => {
  if (!loading && userValue ) {
    setUserData({ 
      pokemonCaught: userValue?.user?.pokemonCaught?.map((caught) => caught.entry)
    });
  }
}, [ loading, userValue ]);
 

function newCatch(entry) {

  catchPokemon({
    variables: {
      username: currentUser,
      entry: parseFloat(entry)
    }
  });

  // window.location.reload(false);
};


function releaseCatch(entry) {

    unCatchPokemon({
      variables: {
        username: currentUser,
        entry: parseFloat(entry)
      }
    });


};
function toggleCatch(entry){
  
  if(!userData.pokemonCaught.includes(parseFloat(entry))){
    newCatch(entry)
    userData.pokemonCaught = [...userData.pokemonCaught, parseFloat(entry)]
    document.getElementById(`${entry}`).src = pokeballClosed
    console.log(userData.pokemonCaught)
 
  }else{
    releaseCatch(entry)
    userData.pokemonCaught = userData.pokemonCaught.filter(pokemon => pokemon != parseFloat(entry))
    document.getElementById(`${entry}`).src = pokeballOpen
    console.log(userData.pokemonCaught)
   
  }
}

  return (
    <div className='gen-eight-bg'>
      <div className='container pt-3'>
        <ul className="list-group"> 
        { JSONdata.map((pokemon, i) => {
          return (  
          <li className="list-group-item-success m-1" key={parseFloat(pokemon.entry)}>
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'>
                <li>
                  <img 
                    width='70px'
                    src={`../../assets/sprites/Gen-8-Sprites/${parseFloat(pokemon.entry)}.png`}
                    >
                  </img>
                </li>
                <li className='m-4'>
                  <h4>#{parseFloat(pokemon.entry)}</h4>
                </li>
              </div>
              <li><h4>{pokemon.name}</h4></li>
              <li><h6>{pokemon.type}</h6></li> 
              <li>
                <Tada duration={2500}>       
                <img
                  id={parseFloat(parseFloat(pokemon.entry))}
                  key={parseFloat(parseFloat(pokemon.entry))}
                  className='pokeball'
                  src={!userData.pokemonCaught.includes(parseFloat(pokemon.entry)) ?pokeballOpen : pokeballClosed}
                  onClick={() => toggleCatch(parseFloat(pokemon.entry))}
                  >
                </img>
                </Tada>
              </li>  
            </ul>    
          </li>
          )})}
        </ul>
      </div>  
    </div>
  );
}

