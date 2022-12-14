import React, { useState, useEffect } from 'react';
import UserMenu from '../UserMenu';
import '../../styles/dashboard.css';
import pokeball from '../../images/badges/pokeball-badge.png'
import greatball from '../../images/badges/greatball-badge.png'
import ultraball from '../../images/badges/ultraball-badge.png'
import masterball from '../../images/badges/masterball-badge.png'

import { useQuery} from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

export default function Dashboard() {

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



const genOneTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon <= 151);
const genTwoTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 152 && pokemon <= 252);
const genThreeTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 253 && pokemon <= 386);
const genFourTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 387 && pokemon <= 493);
const genFiveTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 494 && pokemon <= 649);
const genSixTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 650 && pokemon <= 721);
const genSevenTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 722 && pokemon <= 809);
const genEightTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 810 && pokemon <= 905);
const genNineTotal = userData?.pokemonCaught?.filter((pokemon) => pokemon >= 906 && pokemon <= 1010);

function determineBadge (userTotal, genTotal){
  if(userTotal/genTotal < .33){ 
    return pokeball
  }else if (userTotal/genTotal < .66){
    return greatball
  }else if (userTotal/genTotal <.9999){
    return ultraball
  }else if (userTotal/genTotal == 1){
    return masterball
  }
  
}

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
                  <a className='barz' href='/GenOne'>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Kanto</h2>
                    <h5>{genOneTotal.length} / 151</h5>
                    <img width='40px'src={determineBadge(genOneTotal.length, 151)}></img>
                  </li>
                  </a>
                  <a className='barz' href='/GenTwo'>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Johto</h2>
                    <h5>{genTwoTotal.length} / 100</h5>
                    <img width='40px'src={determineBadge(genTwoTotal.length, 100)}></img>
                  </li>
                  </a>
                  <a className='barz' href='/GenThree'>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Hoenn</h2>
                    <h5>{genThreeTotal.length} / 135</h5>
                    <img width='40px'src={determineBadge(genThreeTotal.length, 135)}></img>
                  </li>
                  </a>
                  <a className='barz' href='/GenFour'>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Sinnoh</h2>
                    <h5>{genFourTotal.length} / 107</h5>
                    <img width='40px'src={determineBadge(genFourTotal.length, 107)}></img>
                  </li>
                  </a>
                  <a className='barz' href='/GenFive'>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Unova</h2>
                    <h5>{genFiveTotal.length} / 156</h5>
                    <img width='40px'src={determineBadge(genFiveTotal.length, 156)}></img>
                  </li>
                  </a>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                <a className='barz' href='/GenSix'>
                <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                    <h2>Kalos</h2>
                    <h5>{genSixTotal.length} / 72</h5>
                    <img width='40px'src={determineBadge(genSixTotal.length,72)}></img>
                </li>
                </a>
                <a className='barz' href='/GenSeven'>
                <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                  <h2>Alola</h2>
                  <h5>{genSevenTotal.length} / 88</h5>
                  <img width='40px'src={determineBadge(genSevenTotal.length,88)}></img>
                </li>
                </a>
                <a className='barz' href='/GenEight'>
                  <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style={{borderRadius:'5px'}}>
                  <h2>Galar</h2>
                  <h5>{genEightTotal.length}/ 96</h5>
                  <img width='40px'src={determineBadge(genEightTotal.length,96)}></img>
                </li>
                </a>
                <a className='barz' href='/GenNine'>
                <li className='list-group-item-success mt-3 d-flex align-items-center justify-content-between p-3' style=     {{borderRadius:'5px'}}>
                  <h2>Paldea</h2>
                  <h5>{genNineTotal.length} / 105</h5>
                  <img width='40px'src={determineBadge(genNineTotal.length,105)}></img>
                </li>
                </a>
                </ul>
              </div>
            </div>
          </div>           
        </ul>      
      </div>
    </div>
  );
}