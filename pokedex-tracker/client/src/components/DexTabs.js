import React from 'react';
import dashboard from '../images/tabs-ui/dashboard.png';
import genOneTab from '../images/tabs/generations-01.png';
import genTwoTab from '../images/tabs/generations-02.png';
import genThreeTab from '../images/tabs/generations-03.png';
import genFourTab from '../images/tabs/generations-04.png';
import genFiveTab from '../images/tabs/generations-05.png';
import genSixTab from '../images/tabs/generations-06.png';
import genSevenTab from '../images/tabs/generations-07.png';
import genEightTab from '../images/tabs/generations-08.png';
import genNineTab from '../images/tabs/generations-09.png';
import login from '../images/tabs-ui/login.png';
import signup from '../images/tabs-ui/signup.png';

function DexTabs() {

  return (
    <ul className="nav d-flex justify-content-between banner-bg" id='pinned-trigger1'>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${dashboard})`}}
          href="/Dashboard"
          className= 'nav-link tab-bg-white'
          >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genOneTab})`}}
          href="/GenOne"
          className='nav-link tab-bg-black'
        ></a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genTwoTab})`}}
          href="/GenTwo"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genThreeTab})`}}
          href="/GenThree"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genFourTab})`}}
          href="/GenFour"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genFiveTab})`}}
          href="/GenFive"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genSixTab})`}}
          href="/GenSix"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genSevenTab})`}}
          href="/GenSeven"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genEightTab})`}}
          href="/GenEight"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genNineTab})`}}
          href="/GenNine"
          className='nav-link tab-bg-black'
        >
        </a>
      </li>
        <li className="nav-item">
          <a
            style={{backgroundImage: `url(${login})`}}
            href="/Login"
            className='nav-link tab-bg-white'
          >
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{backgroundImage:`url(${signup})`}}
            href="/Signup"
            className='nav-link tab-bg-white'
          >
          </a>
        </li>
    </ul>
  );
}

export default DexTabs;
