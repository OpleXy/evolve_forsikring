import React, { useState } from 'react';
import { InsuranceProvider } from './context/InsuranceContext.jsx';
import HomePage from './components/HomePage.jsx';
import MyPage from './components/MyPage.jsx';
import logo from './assets/evolve_logo.png';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <InsuranceProvider>
      <div className="app-container">
        <header className="topbar">
          <div className="topbar-content">
            <img src={logo} alt="Evolve Logo" className="topbar-logo" />
            <span className="topbar-text">Evolve Forsikringsoversikt</span>
          </div>
        </header>

        <main className="main-content">
          {currentPage === 'home' && (
            <HomePage onNavigateToMyPage={() => setCurrentPage('mypage')} />
          )}
          {currentPage === 'mypage' && (
            <MyPage onNavigateToHome={() => setCurrentPage('home')} />
          )}
        </main>

        <footer className="footer">
          <div className="footer-content">
            <img src={logo} alt="Evolve Logo" className="footer-logo" />
            <span className="footer-text">Evolve Forsikringsoversikt</span>
          </div>
        </footer>
      </div>
    </InsuranceProvider>
  );
}

export default App;
