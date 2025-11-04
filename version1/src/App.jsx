import React, { useState } from 'react';
import { InsuranceProvider } from './context/InsuranceContext.jsx';
import TabNavigation from './components/TabNavigation.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddInsuranceForm from './components/AddInsuranceForm.jsx';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleFormSuccess = () => {
    // Automatically switch to dashboard when form is submitted
    setActiveTab('dashboard');
  };

  return (
    <InsuranceProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Evolve Forsikring</h1>
          <p>Din oversikt over alle forsikringsavtaler</p>
        </header>

        <div className="content-wrapper">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          <main>
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'add' && <AddInsuranceForm onSuccess={handleFormSuccess} />}
          </main>
        </div>
      </div>
    </InsuranceProvider>
  );
}

export default App;
