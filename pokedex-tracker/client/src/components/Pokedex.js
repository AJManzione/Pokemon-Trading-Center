import React, { useState } from 'react';
import DexTabs from './DexTabs';
import Dashboard from './pages/Dashboard';
import GenOne from './pages/GenOne';
import GenTwo from './pages/GenTwo';
import GenThree from './pages/GenThree';
import GenFour from './pages/GenFour';
import GenFive from './pages/GenFive';
import GenSix from './pages/GenSix';
import GenSeven from './pages/GenSeven';
import GenEight from './pages/GenEight';
import GenNine from './pages/GenNine';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import '../styles/pokedex.css';



export default function Pokedex() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

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
