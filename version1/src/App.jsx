import React, { useState } from 'react';
import { InsuranceProvider } from './context/InsuranceContext.jsx';
import HomePage from './components/HomePage.jsx';
import MyPage from './components/MyPage.jsx';
import InsuranceComparison from './components/InsuranceComparison.jsx';
import logo from './assets/evolve_logo.png';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedInsuranceType, setSelectedInsuranceType] = useState(null);

  const navigateToComparison = (type) => {
    setSelectedInsuranceType(type);
    setCurrentPage('comparison');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedInsuranceType(null);
  };

  return (
    <InsuranceProvider>
      <div className="app-container">
        <header className="topbar">
          <div className="topbar-content">
            <div className="topbar-left" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
              <img
                src={logo}
                alt="Evolve Logo"
                className="topbar-logo"
              />
              <span className="topbar-text">Evolve Forsikringsoversikt</span>
            </div>
            <nav className="topbar-nav">
              <button
                className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
                onClick={navigateToHome}
              >
                Hjem
              </button>
              <button
                className={`nav-btn ${currentPage === 'mypage' ? 'active' : ''}`}
                onClick={() => setCurrentPage('mypage')}
              >
                Mine forsikringer
              </button>
            </nav>
          </div>
        </header>

        <main className="main-content">
          {currentPage === 'home' && (
            <HomePage
              onNavigateToMyPage={() => setCurrentPage('mypage')}
              onNavigateToComparison={navigateToComparison}
            />
          )}
          {currentPage === 'mypage' && (
            <MyPage onNavigateToHome={navigateToHome} />
          )}
          {currentPage === 'comparison' && selectedInsuranceType && (
            <div className="comparison-page">
              <button className="back-to-home" onClick={navigateToHome}>
                ← Tilbake til forsiden
              </button>
              <InsuranceComparison type={selectedInsuranceType} />
            </div>
          )}
        </main>

        <footer className="footer">
          <div className="footer-content" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Evolve Logo" className="footer-logo" />
            <span className="footer-text">Evolve Forsikringsoversikt</span>
          </div>
        </footer>
      </div>
    </InsuranceProvider>
  );
}

export default App;
