const pokemonCaughtArray = []
import React, { useState, useEffect } from 'react';
import pokeballOpen from '../../images/pokeball-open.png';
import pokeballClosed from '../../images/pokeball-closed.png';
import Tada from 'react-reveal/Tada';


import { useQuery, useMutation} from '@apollo/client';
import { CATCH_POKEMON } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";


export default function GenOne() {

// allPokemon rendered from JSON data
  const [pokemonData, setPokemonData] = useState([]);

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
        setPokemonData(myJson)
      })
  }
  
  useEffect(()=>{
    getData()
  },[])

//End of Pokemon Rendering





// Querying the database for pokemonCaught for the user that is logged in 
const currentUser = localStorage.getItem('username')

  const { loading, data: userValue } = useQuery(QUERY_USER, {
    variables: { username: currentUser },
    
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
//End of query

// pokemon caught (userData.pokemonCaught)



let pokemon = ""

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
  pokemon = entry
  
}


/* -------------------------------------------------------------------------- */
/*                                Catch Pokemon                               */
/* -------------------------------------------------------------------------- */

const [getPokemon, setPokemon] = useState({
  username: '',
  entry: ''
});

const [addPokemon, { error, data }] = useMutation(CATCH_POKEMON);


try {
  const { data } =  addPokemon({
    variables: {
      username: currentUser,
      entry: pokemon
    },
  })
} catch (e) {
  console.error(e)
};



  return (
    <div className='gen-one-bg'>
      <div className='container pt-3'>
        <ul className="list-group"> 
        {pokemonData.map((element, i) => {
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


