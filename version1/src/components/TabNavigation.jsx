import React from 'react';
import '../styles/TabNavigation.css';

const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-navigation">
      <button
        className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
        onClick={() => onTabChange('dashboard')}
      >
        📊 Dashboard
      </button>
      <button
        className={`tab-button ${activeTab === 'add' ? 'active' : ''}`}
        onClick={() => onTabChange('add')}
      >
        ➕ Legg til ny forsikringsavtale
      </button>
    </div>
  );
};

export default TabNavigation;
