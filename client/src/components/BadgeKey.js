import React from 'react'
import pokeball from '../images/badges/pokeball-badge.png'
import greatball from '../images/badges/greatball-badge.png'
import ultraball from '../images/badges/ultraball-badge.png'
import masterball from '../images/badges/masterball-badge.png'

export default function BadgeKey() {
  return (
    <div className='badge-key-bg'>
      <div className='row d-flex justify-content-center'>
        <h5 className='text-center mt-4'>Badge Rewards</h5>
        <div className='container'>
        <hr className='w-100'></hr>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'> &lt;33%</p>
            <p className='text-center'>
              <span>
                <img 
                  style={{width: '30px'}}
                  className='pokeball'src={pokeball}></img>
              </span>
            </p>
          </div>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'> &lt;66%</p>
            <p className='text-center'>
              <span>
                <img 
                  style={{width: '30px'}}
                  className='pokeball'src={greatball}></img>
              </span>
            </p>
          </div>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'> &lt;99%</p>
            <p className='text-center'>
              <span>
                <img 
                  style={{width: '30px'}}
                  className='pokeball'src={ultraball}></img>
              </span>
            </p>
          </div>
          <div className='col-lg-12 d-flex justify-content-around'>
            <p className='text-center'>100%</p>
            <p className='text-center'>
              <span>
                <img 
                  style={{width: '30px'}}
                  className='pokeball ml-3'src={masterball}></img>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
