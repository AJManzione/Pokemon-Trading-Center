import React from 'react'
import pokeball from '../images/badges/pokeball-badge.png'
import greatball from '../images/badges/greatball-badge.png'
import ultraball from '../images/badges/ultraball-badge.png'
import masterball from '../images/badges/masterball-badge.png'

export default function BadgeKey() {
  return (
    <div className='badge-key-bg'>
      <div className='row d-flex justify-content-center'>
        <h5 className='text-center m-2'>Badge Rewards</h5>
        <hr className='w-75'></hr>
        <div className='container m-3'>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'>0 - 25%</p>
            <p className='text-center'>
              <span>
                <img width='25px'className='pokeball'src={pokeball}></img>
              </span>
            </p>
          </div>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'>25 - 50%</p>
            <p className='text-center'>
              <span>
                <img width='25px'className='pokeball'src={greatball}></img>
              </span>
            </p>
          </div>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'>50 - 75%</p>
            <p className='text-center'>
              <span>
                <img width='25px'className='pokeball'src={ultraball}></img>
              </span>
            </p>
          </div>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'>75 - 100%</p>
            <p className='text-center'>
              <span>
                <img width='25px'className='pokeball'src={masterball}></img>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
