import React from 'react';

function DexTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenOne"
          onClick={() => handlePageChange('GenOne')}
          className={currentPage === 'GenOne' ? 'nav-link active' : 'nav-link'}
        >
          Kanto
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenTwo"
          onClick={() => handlePageChange('GenTwo')}
          className={currentPage === 'GenTwo' ? 'nav-link active' : 'nav-link'}
        >
          Johto
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenThree"
          onClick={() => handlePageChange('GenThree')}
          className={currentPage === 'GenThree' ? 'nav-link active' : 'nav-link'}
        >
          Hoenn
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenFour"
          onClick={() => handlePageChange('GenFour')}
          className={currentPage === 'GenFour' ? 'nav-link active' : 'nav-link'}
        >
          Sinnoh
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenFive"
          onClick={() => handlePageChange('GenFive')}
          className={currentPage === 'GenFive' ? 'nav-link active' : 'nav-link'}
        >
          Unova
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenSix"
          onClick={() => handlePageChange('GenSix')}
          className={currentPage === 'GenSix' ? 'nav-link active' : 'nav-link'}
        >
          Kalos
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenSeven"
          onClick={() => handlePageChange('GenSeven')}
          className={currentPage === 'GenSeven' ? 'nav-link active' : 'nav-link'}
        >
          Alola
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenEight"
          onClick={() => handlePageChange('GenEight')}
          className={currentPage === 'GenEight' ? 'nav-link active' : 'nav-link'}
        >
          Galar
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#GenNine"
          onClick={() => handlePageChange('GenNine')}
          className={currentPage === 'GenNine' ? 'nav-link active' : 'nav-link'}
        >
          Paldea
        </a>
      </li>
        <li className="nav-item">
          <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Signup"
            onClick={() => handlePageChange('Signup')}
            className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Signup
          </a>
        </li>
    </ul>
  );
}

export default DexTabs;
