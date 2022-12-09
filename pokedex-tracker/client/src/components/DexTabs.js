import React from 'react';
import dashboard from '../images/tabs-ui/dashboard.jpg';
import genOneTab from '../images/tabs/gen-one-tab.jpg';
import genTwoTab from '../images/tabs/gen-two-tab.jpg';
import genThreeTab from '../images/tabs/gen-three-tab.jpg';
import genFourTab from '../images/tabs/gen-four-tab.jpg';
import genFiveTab from '../images/tabs/gen-five-tab.jpg';
import genSixTab from '../images/tabs/gen-six-tab.jpg';
import genSevenTab from '../images/tabs/gen-seven-tab.jpg';
import genEightTab from '../images/tabs/gen-eight-tab.jpg';
import genNineTab from '../images/tabs/gen-nine-tab.jpg';
import login from '../images/tabs-ui/login.jpg';
import signup from '../images/tabs-ui/signup.jpg';

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
