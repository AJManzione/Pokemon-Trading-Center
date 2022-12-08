import React, { useState } from 'react';
import pokeballOpen from '../../images/pokeball-open.png'
import pokeballClosed from '../../images/pokeball-closed.png'

export default function GenOne() {

const [pokemonCaught, setPokemonCaughtStatus] = useState('uncaught');

const renderCaughtStatus = () => {
  if (pokemonCaught === 'uncaught') {
    return pokeballOpen;
  } return pokeballClosed;
};

  return (
    <div className='custom-bg'>
      <div className='container pt-3'>
        <ul className="list-group">
          <li className="list-group-item-success m-1">
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'> 
                <li><img width='70px'src='https://cdn.traction.one/pokedex/pokemon/1.png'></img></li>
                <li className='m-4'>
                  <h4>#001</h4>
                </li>
              </div>
              <li><h4>Bulbasaur</h4></li>
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
          <li className="list-group-item-success m-1">
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'> 
                <li><img width='70px'src='https://cdn.traction.one/pokedex/pokemon/2.png'></img></li>
                <li className='m-4'>
                  <h4>#002</h4>
                </li>
              </div>
              <li><h4>Ivysaur</h4></li>
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
          <li className="list-group-item-success m-1">
            <ul className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center justify-content-around'> 
                <li><img width='70px'src='https://cdn.traction.one/pokedex/pokemon/3.png'></img></li>
                <li className='m-4'>
                  <h4>#003</h4>
                </li>
              </div>
              <li><h4>Venusaur</h4></li>
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
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  );
}

