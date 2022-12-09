import React from 'react';
import UserMenu from '../UserMenu';
import BadgeKey from '../BadgeKey'
import '../../styles/dashboard.css';
import pokeball from '../../images/badges/pokeball-badge.png'

export default function Dashboard() {
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

/* <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 

                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Johto</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Hoenn</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Sinnoh</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Unova</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Kalos</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Alola</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Galar</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul>
              </li>
              <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Paldea</h1>
                      <br></br>
                    </li>
                  </div>  
                </ul> */
