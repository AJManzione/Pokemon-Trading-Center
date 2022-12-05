import React, { useState } from 'react';
import DexTabs from './DexTabs';
import Home from './pages/Home';
import GenOne from './pages/genOne';
import GenTwo from './pages/genTwo';
import GenThree from './pages/genThree';
import GenFour from './pages/genFour';
import GenFive from './pages/genFive';
import GenSix from './pages/genSix';
import GenSeven from './pages/genSeven';
import GenEight from './pages/genEight';
import GenNine from './pages/genNine';


export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'genOne') {
      return <GenOne />;
    }
    if (currentPage === 'genTwo') {
      return <GenTwo />;
    }
    if (currentPage === 'genThree') {
      return <GenThree />;
    }
    if (currentPage === 'genFour') {
      return <GenFour />;
    }
    if (currentPage === 'genFive') {
      return <GenFive />;
    }
    if (currentPage === 'genSix') {
      return <GenSix />;
    }
    if (currentPage === 'genSeven') {
      return <GenSeven />;
    }
    if (currentPage === 'genEight') {
      return <GenEight />;
    }
    if (currentPage === 'genNine') {
      return <GenNine />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <DexTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
