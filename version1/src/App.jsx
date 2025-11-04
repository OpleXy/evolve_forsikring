import React, { useState } from 'react';
import { InsuranceProvider } from './context/InsuranceContext.jsx';
import HomePage from './components/HomePage.jsx';
import MyPage from './components/MyPage.jsx';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <InsuranceProvider>
      <div className="app-container">
        {currentPage === 'home' && (
          <HomePage onNavigateToMyPage={() => setCurrentPage('mypage')} />
        )}
        {currentPage === 'mypage' && (
          <MyPage onNavigateToHome={() => setCurrentPage('home')} />
        )}
      </div>
    </InsuranceProvider>
  );
}

export default App;
