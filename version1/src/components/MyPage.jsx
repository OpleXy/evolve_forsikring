import React, { useState } from 'react';
import TabNavigation from './TabNavigation.jsx';
import Dashboard from './Dashboard.jsx';
import AddInsuranceForm from './AddInsuranceForm.jsx';
import '../styles/MyPage.css';

function MyPage({ onNavigateToHome }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleFormSuccess = () => {
    setActiveTab('dashboard');
  };

  return (
    <div className="mypage-container">
      <header className="mypage-header">
        <button className="back-btn" onClick={onNavigateToHome}>
          ← Tilbake til hovedside
        </button>
        <div className="header-content">
          <h1>Mine forsikringer</h1>
          <p>Din oversikt over alle forsikringsavtaler</p>
        </div>
      </header>

      <div className="content-wrapper">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'add' && <AddInsuranceForm onSuccess={handleFormSuccess} />}
        </main>
      </div>
    </div>
  );
}

export default MyPage;
