import React from 'react';
import UserMenu from '../UserMenu';
import BadgeKey from '../BadgeKey'
import '../../styles/dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard-bg'>
      <div className='container pt-3'>
        <ul className="list-group">
          <div className='row'>
            <div className='col-lg-3'>
              <UserMenu/>
            </div>
            <div className='col-lg-9'>
            <li className="list-group-item-success m-1">
                <ul className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-around'> 
                    <li>
                      <h1>Kanto</h1>
                      <br></br>
                    </li>
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
                </ul>
              </li>
            </div>
          </div>           
        </ul>      
      </div>
    </div>
  );
}
