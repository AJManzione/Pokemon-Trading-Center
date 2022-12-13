import React, { useState, useEffect } from 'react';
import BadgeKey from './BadgeKey';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


export default function UserMenu() {


const currentUser = localStorage.getItem('username')



  const { loading, data: userValue } = useQuery(QUERY_USER, {
    variables: { username: currentUser },
    
  });
  
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    sprite: "",
    pokemonCaught: [],
  });


  console.log(userValue?.user?.sprite)


  useEffect(() => {
    if (!loading && userValue ) {
      setUserData({
        _id: userValue?.user?._id,
        username: userValue?.user?.username,
        sprite: userValue?.user?.sprite,
        pokemonCaught: userValue?.user?.pokemonCaught?.map((caught) => caught.entry)
      });
    }
  }, [ loading, userValue ]);

  return (
  <div>
    <div className='user-menu-bg'>
      <div className='row m-3'>
        <div className='col d-flex justify-content-center mt-2'>
          <p style={{color:'lightgray'}}>Welcome Back!</p>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <h1 
              className='text-center'
              style={{fontSize:'200%'}}>{userData.username}</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center '>
            <img 
              width='100px'
              src={userValue?.user?.sprite}></img>
            <a 
              className='m-4 p-1'
              style={{fontSize:'10px', color:'white', textDecoration:'none', borderStyle:'solid', borderColor:'lightblue', borderRadius:'10px', borderWidth:'1px'}}
              href='/sprites'>change sprite
            </a>
          </div>
        </div>
        <hr></hr>
        <div className='row'>
          <div className='col'>
            <p 
              style={{color:'gray', fontSize:'15px'}}>Pokemon Caught:
              <span 
                className='ml-3'
                style={{fontSize:'15px', color:'white'}}>
                {userData.pokemonCaught.length} / 1008
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <BadgeKey/>
  </div>
  )
}
