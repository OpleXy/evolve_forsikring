import React, { createContext, useContext, useState } from 'react';

const InsuranceContext = createContext();

// Dummy data for initial state
const initialInsurances = [
  {
    id: 1,
    selskap: 'If Forsikring',
    dekningstype: 'Innboforsikring',
    pris: 250,
    betalingsintervall: 'måned',
    betalingsdato: '2025-11-15'
  },
  {
    id: 2,
    selskap: 'Gjensidige',
    dekningstype: 'Bilforsikring',
    pris: 4500,
    betalingsintervall: 'år',
    betalingsdato: '2025-12-01'
  },
  {
    id: 3,
    selskap: 'Tryg',
    dekningstype: 'Reiseforsikring',
    pris: 180,
    betalingsintervall: 'måned',
    betalingsdato: '2025-11-20'
  }
];

export const InsuranceProvider = ({ children }) => {
  const [insurances, setInsurances] = useState(initialInsurances);

  const addInsurance = (insurance) => {
    const newInsurance = {
      ...insurance,
      id: Date.now() // Simple ID generation
    };
    setInsurances([...insurances, newInsurance]);
  };

  const removeInsurance = (id) => {
    setInsurances(insurances.filter(insurance => insurance.id !== id));
  };

  return (
    <InsuranceContext.Provider value={{ insurances, addInsurance, removeInsurance }}>
      {children}
    </InsuranceContext.Provider>
  );
};

export const useInsurance = () => {
  const context = useContext(InsuranceContext);
  if (!context) {
    throw new Error('useInsurance must be used within InsuranceProvider');
  }
  return context;
};
