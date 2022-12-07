import React, { useState } from 'react';
import pokeballOpen from '../../images/pokeball-open.png'
import pokeballClosed from '../../images/pokeball-closed.png'

export default function GenOne() {

const [pokemonCaught, setPokemonCaughtStatus] = useState('uncaught');

const renderCaughtStatus = () => {
  if (pokemonCaught === 'uncaught') {
    return pokeballOpen;
  } return pokeballClosed;
  
}

  return (
    <div className='container mt-4'>
      <ul className="list-group">
        <li class="list-group-item">
          <ul className={pokemonCaught === 'caught' ? 'd-flex justify-content-between align-items-center caught' : 'd-flex justify-content-between align-items-center'}>
            <li><h4>#001</h4></li>
            <li><h4>Bulbasaur</h4></li>
            <li>
              <img width='50px'src='https://cdn.traction.one/pokedex/pokemon/1.png'></img>
            </li>
            <li><h6>Grass, Poison</h6></li> 
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
        </li>
      </ul>
    </div>
  );
}

