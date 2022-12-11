import React from 'react';
import UserMenu from '../UserMenu';
import '../../styles/dashboard.css';
import pokeball from '../../images/badges/pokeball-badge.png'

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

export default function Dashboard() {


  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: "Misty" },
    
  });
  
  const info = data?.user || {};


  return (
    <div className='dashboard-bg'>
      <div className='container pt-3'>
        <ul className="list-group">
          <div className='row'>
            <div className='col-lg-3'>
              <UserMenu/>
            </div>
            <div className='col-lg-9 d-flex mt-1'>
              <div className='col-lg-6'>
                <ul>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Kanto</h2>
                    <h5>15 Caught / 151</h5>
                    <img width='40px'src={pokeball}></img>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Johto</h2>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Hoenn</h2>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Sinnoh</h2>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Unova</h2>
                    <h1>
                    {info.username}
                    </h1>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Kalos</h2>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Alola</h2>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Galar</h2>
                  </li>
                  <li className='list-group-item-success mt-3' style={{borderRadius:'5px'}}>
                    <h2>Paldea</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>           
        </ul>      
      </div>
    </div>
  );
}

