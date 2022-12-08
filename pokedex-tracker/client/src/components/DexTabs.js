import React from 'react';

function DexTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav d-flex justify-content-between banner-bg">
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active dashboard-tab' : 'nav-link dashboard-tab'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenOne"
          onClick={() => handlePageChange('GenOne')}
          className={currentPage === 'GenOne' ? 'nav-link active gen-one-tab' : 'nav-link tag-bg gen-one-tab'}
        ></a>
      </li>

      <li className="nav-item">
        <a
          href="#GenTwo"
          onClick={() => handlePageChange('GenTwo')}
          className={currentPage === 'GenTwo' ? 'nav-link active gen-two-tab' : 'nav-link gen-two-tab'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenThree"
          onClick={() => handlePageChange('GenThree')}
          className={currentPage === 'GenThree' ? 'nav-link active gen-three-tab' : 'nav-link gen-three-tab'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenFour"
          onClick={() => handlePageChange('GenFour')}
          className={currentPage === 'GenFour' ? 'nav-link active gen-four-tab' : 'nav-link gen-four-tab'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenFive"
          onClick={() => handlePageChange('GenFive')}
          className={currentPage === 'GenFive' ? 'nav-link active gen-five-tab' : 'nav-link gen-five-tab'}
        >
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#GenSix"
          onClick={() => handlePageChange('GenSix')}
          className={currentPage === 'GenSix' ? 'nav-link active gen-six-tab' : 'nav-link gen-six-tab'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenSeven"
          onClick={() => handlePageChange('GenSeven')}
          className={currentPage === 'GenSeven' ? 'nav-link active gen-seven-tab' : 'nav-link gen-seven-tab'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenEight"
          onClick={() => handlePageChange('GenEight')}
          className={currentPage === 'GenEight' ? 'nav-link active gen-eight-tab' : 'nav-link gen-eight-tab'}
        >
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenNine"
          onClick={() => handlePageChange('GenNine')}
          className={currentPage === 'GenNine' ? 'nav-link active gen-nine-tab' : 'nav-link gen-nine-tab'}
        >
        </a>
      </li>
        <li className="nav-item">
          <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active login-tab' : 'nav-link login-tab'}
          >
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active signup-tab' : 'nav-link signup-tab'}
          >
          </a>
        </li>
    </ul>
  );
}

export default DexTabs;
