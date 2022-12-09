import React from 'react';
import BadgeKey from './BadgeKey';

export default function UserMenu() {
  return (
  <div>
    <div className='user-menu-bg'>
      <div className='row m-3'>
        <div className='col-lg-12 d-flex justify-content-between mt-3'>
          <p style={{color: 'gray'}}>Welcome back!
            <span style={{color: 'white'}}>
              <h4>AJManzione</h4>
            </span>
          </p>
          <p>
            <span>
              <img width='50px'src='https://cdn.traction.one/pokedex/pokemon/25.png'></img>
            </span>
            <div className='col-lg-12'>
              <a 
              style={{ color:'gray', textDecoration:'none', fontSize:'10px'}}
              href='#'>change sprite
              </a>
            </div>
          </p>
        </div>
      </div>
      <form className='text-center'>Search for a Pokemon!
        <input 
        className='mt-1'
        style={{backgroundColor: 'ivory', border: 'none'}}
        >
        </input>
      </form>
      <hr></hr>
      <div className='row'>
        <div className='col-lg-12 d-flex justify-content-around'>
          <p style={{color:'gray'}}>Pokemon Caught:</p>
          <h6 style={{color:'white'}}>561 / 1001</h6>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 d-flex justify-content-around'>
          <p style={{color:'gray'}}>Badges:</p>
          <h6 style={{color:'white'}}>5</h6>
        </div>
      </div>
    </div>
    <br></br>
    <BadgeKey/>
  </div>
  )
}