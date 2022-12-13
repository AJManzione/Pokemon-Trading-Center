import React, { useState, useEffect } from 'react';
import BadgeKey from './BadgeKey';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Trainers from './pages/Trainers';


export default function UserMenu() {

const currentUser = localStorage.getItem('username')


  const { loading, data: userValue } = useQuery(QUERY_USER, {
    variables: { username: currentUser },
    
  });
  
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    pokemonCaught: [],
  });

  useEffect(() => {
    if (!loading && userValue ) {
      setUserData({
        _id: userValue.user._id,
        username: userValue.user.username,
        pokemonCaught: userValue?.user?.pokemonCaught?.map((caught) => caught.entry)
      });
    }
  }, [ loading, userValue ]);


  return (
  <div>
    <div className='user-menu-bg'>
      <div className='row m-3'>
        <div className='col-lg-12 d-flex justify-content-between mt-3'>
          <p style={{color: 'gray'}}>Welcome back!
            <span style={{color: 'white'}}>
              <h4>{userData.username}</h4>
            </span>
          </p>
          <p>
            <span>
              {/* <img width='50px'src='https://cdn.traction.one/pokedex/pokemon/25.png'></img> */}
            </span>
            <div className='col-lg-12'>
            <a href='/sprites'>change sprite</a>
            </div>
          </p>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-lg-12 d-flex justify-content-around'>
          <p style={{color:'gray'}}>Pokemon Caught:</p>
          <h6 style={{color:'white'}}>{userData.pokemonCaught.length} / 1001</h6>
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