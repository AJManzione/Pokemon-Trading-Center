import React from 'react'

export default function UserMenu() {
  return (
    <div className='user-menu-bg'>
      <div className='row d-flex align-items-center justify-content-around'>
        <div className='col-md-6 d-flex justify-content-end'>
          <p style={{color: 'gray'}}>Welcome back<span style={{color: 'white'}}><h4>AJManzione</h4></span></p>
        </div>
        <div className='col-md-3 d-flex justify-content-start'>
          <img width='50px'src='https://cdn.traction.one/pokedex/pokemon/25.png'></img>
        </div>
      </div>
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
  )
}