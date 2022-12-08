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

function DexTabs({ currentPage, handlePageChange }) {

  return (
    <ul className="nav d-flex justify-content-between banner-bg" id='pinned-trigger1'>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${dashboard})`}}
          href="#dashboard"
          onClick={() => handlePageChange('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active tab-bg-white' : 'nav-link tab-bg-white'}
          >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genOneTab})`}}
          href="#GenOne"
          onClick={() => handlePageChange('GenOne')}
          className={currentPage === 'GenOne' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        ></a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genTwoTab})`}}
          href="#GenTwo"
          onClick={() => handlePageChange('GenTwo')}
          className={currentPage === 'GenTwo' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genThreeTab})`}}
          href="#GenThree"
          onClick={() => handlePageChange('GenThree')}
          className={currentPage === 'GenThree' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genFourTab})`}}
          href="#GenFour"
          onClick={() => handlePageChange('GenFour')}
          className={currentPage === 'GenFour' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genFiveTab})`}}
          href="#GenFive"
          onClick={() => handlePageChange('GenFive')}
          className={currentPage === 'GenFive' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genSixTab})`}}
          href="#GenSix"
          onClick={() => handlePageChange('GenSix')}
          className={currentPage === 'GenSix' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genSevenTab})`}}
          href="#GenSeven"
          onClick={() => handlePageChange('GenSeven')}
          className={currentPage === 'GenSeven' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genEightTab})`}}
          href="#GenEight"
          onClick={() => handlePageChange('GenEight')}
          className={currentPage === 'GenEight' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          style={{backgroundImage: `url(${genNineTab})`}}
          href="#GenNine"
          onClick={() => handlePageChange('GenNine')}
          className={currentPage === 'GenNine' ? 'nav-link active tab-bg-black' : 'nav-link tab-bg-black'}
        >
        </a>
      </li>
        <li className="nav-item">
          <a
            style={{backgroundImage: `url(${login})`}}
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active tab-bg-white' : 'nav-link tab-bg-white'}
          >
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{backgroundImage:`url(${signup})`}}
            href="#Signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active tab-bg-white' : 'nav-link tab-bg-white'}
          >
          </a>
        </li>
    </ul>
  );
}

export default DexTabs;
