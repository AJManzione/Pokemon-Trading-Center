import React, { useState } from 'react';
import DexTabs from './DexTabs';
import GenOne from './pages/genOne';
import GenTwo from './pages/genTwo';
import GenThree from './pages/genThree';
import GenFour from './pages/genFour';
import GenFive from './pages/genFive';
import GenSix from './pages/genSix';
import GenSeven from './pages/genSeven';
import GenEight from './pages/genEight';
import GenNine from './pages/genNine';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import '../styles/pokedex.css';
import Dashboard from './pages/Dashboard';
import Banner from '../images/poke-banner-example.jpg'


export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if (currentPage === 'GenOne') {
      return <GenOne />;
    }
    if (currentPage === 'GenTwo') {
      return <GenTwo />;
    }
    if (currentPage === 'GenThree') {
      return <GenThree />;
    }
    if (currentPage === 'GenFour') {
      return <GenFour />;
    }
    if (currentPage === 'GenFive') {
      return <GenFive />;
    }
    if (currentPage === 'GenSix') {
      return <GenSix />;
    }
    if (currentPage === 'GenSeven') {
      return <GenSeven />;
    }
    if (currentPage === 'GenEight') {
      return <GenEight />;
    }
    if (currentPage === 'GenNine') {
      return <GenNine />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Signup') {
      return <Signup />;
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
