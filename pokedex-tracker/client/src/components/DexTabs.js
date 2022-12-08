import React from 'react';

function DexTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav d-flex justify-content-between banner-bg">
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active dashboard-bg' : 'nav-link dashboard-bg'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenOne"
          onClick={() => handlePageChange('GenOne')}
          className={currentPage === 'GenOne' ? 'nav-link active gen-one-bg' : 'nav-link tag-bg gen-one-bg'}
        ></a>
      </li>

      <li className="nav-item">
        <a
          href="#GenTwo"
          onClick={() => handlePageChange('GenTwo')}
          className={currentPage === 'GenTwo' ? 'nav-link active gen-two-bg' : 'nav-link gen-two-bg'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenThree"
          onClick={() => handlePageChange('GenThree')}
          className={currentPage === 'GenThree' ? 'nav-link active gen-three-bg' : 'nav-link gen-three-bg'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenFour"
          onClick={() => handlePageChange('GenFour')}
          className={currentPage === 'GenFour' ? 'nav-link active gen-four-bg' : 'nav-link gen-four-bg'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenFive"
          onClick={() => handlePageChange('GenFive')}
          className={currentPage === 'GenFive' ? 'nav-link active gen-five-bg' : 'nav-link gen-five-bg'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenSix"
          onClick={() => handlePageChange('GenSix')}
          className={currentPage === 'GenSix' ? 'nav-link active gen-six-bg' : 'nav-link gen-six-bg'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenSeven"
          onClick={() => handlePageChange('GenSeven')}
          className={currentPage === 'GenSeven' ? 'nav-link active gen-seven-bg' : 'nav-link gen-seven-bg'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenEight"
          onClick={() => handlePageChange('GenEight')}
          className={currentPage === 'GenEight' ? 'nav-link active gen-eight-bg' : 'nav-link gen-eight-bg'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenNine"
          onClick={() => handlePageChange('GenNine')}
          className={currentPage === 'GenNine' ? 'nav-link active gen-nine-bg' : 'nav-link gen-nine-bg'}
        >
        </a>
      </li>
        <li className="nav-item">
          <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active login-bg' : 'nav-link login-bg'}
          >
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active signup-bg' : 'nav-link signup-bg'}
          >
          </a>
        </li>
    </ul>
  );
}

export default DexTabs;
