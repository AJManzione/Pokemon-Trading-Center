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
          href="#genOne"
          onClick={() => handlePageChange('genOne')}
          className={currentPage === 'genOne' ? 'nav-link active' : 'nav-link'}
        >
          Kanto
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genTwo"
          onClick={() => handlePageChange('genTwo')}
          className={currentPage === 'genTwo' ? 'nav-link active' : 'nav-link'}
        >
          Johto
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genThree"
          onClick={() => handlePageChange('genThree')}
          className={currentPage === 'genThree' ? 'nav-link active' : 'nav-link'}
        >
          Hoenn
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genFour"
          onClick={() => handlePageChange('genFour')}
          className={currentPage === 'genFour' ? 'nav-link active' : 'nav-link'}
        >
          Sinnoh
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genFive"
          onClick={() => handlePageChange('genFive')}
          className={currentPage === 'genFive' ? 'nav-link active' : 'nav-link'}
        >
          Unova
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genSix"
          onClick={() => handlePageChange('genSix')}
          className={currentPage === 'genSix' ? 'nav-link active' : 'nav-link'}
        >
          Kalos
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genSeven"
          onClick={() => handlePageChange('genSeven')}
          className={currentPage === 'genSeven' ? 'nav-link active' : 'nav-link'}
        >
          Alola
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genEight"
          onClick={() => handlePageChange('genEight')}
          className={currentPage === 'genEight' ? 'nav-link active' : 'nav-link'}
        >
          Galar
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#genNine"
          onClick={() => handlePageChange('genNine')}
          className={currentPage === 'genNine' ? 'nav-link active' : 'nav-link'}
        >
          Paldea
        </a>
      </li>
    </ul>
  );
}

export default DexTabs;
