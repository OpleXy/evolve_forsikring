import React, { createContext, useContext, useState, useEffect } from 'react';
import insuranceService from '../services/insuranceService';

const InsuranceContext = createContext();

export const InsuranceProvider = ({ children }) => {
  // Brukerens egne forsikringer (eksisterende funksjonalitet)
  const [insurances, setInsurances] = useState([]);

  // Ny funksjonalitet for produktsammenligning
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [filters, setFilters] = useState({
    sorterPa: 'popularitet'
  });
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(false);

  // Eksisterende funksjoner for brukerens forsikringer
  const addInsurance = (insurance) => {
    const newInsurance = {
      ...insurance,
      id: Date.now()
    };
    setInsurances([...insurances, newInsurance]);
  };

  const removeInsurance = (id) => {
    setInsurances(insurances.filter(insurance => insurance.id !== id));
  };

  // Nye funksjoner for produktsammenligning
  const loadProducts = (type, customFilters = {}) => {
    setLoading(true);
    setSelectedType(type);

    try {
      const mergedFilters = { ...filters, ...customFilters };
      const products = insuranceService.compareProducts(type, mergedFilters);
      setComparisonProducts(products);
    } catch (error) {
      console.error('Feil ved lasting av produkter:', error);
      setComparisonProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const getBestDeals = (type) => {
    try {
      return insuranceService.getBestDeals(type, filters);
    } catch (error) {
      console.error('Feil ved henting av beste tilbud:', error);
      return [];
    }
  };

  const searchProducts = (query) => {
    try {
      return insuranceService.searchProducts(query);
    } catch (error) {
      console.error('Feil ved søk:', error);
      return [];
    }
  };

  const getProductById = (id) => {
    try {
      return insuranceService.getProductById(id);
    } catch (error) {
      console.error('Feil ved henting av produkt:', error);
      return null;
    }
  };

  const getProductStats = (type) => {
    try {
      return insuranceService.getProductStats(type);
    } catch (error) {
      console.error('Feil ved henting av statistikk:', error);
      return null;
    }
  };

  const getCompaniesForType = (type) => {
    try {
      return insuranceService.getCompaniesForType(type);
    } catch (error) {
      console.error('Feil ved henting av selskaper:', error);
      return [];
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  const clearFilters = () => {
    setFilters({
      sorterPa: 'popularitet'
    });
  };

  // Last inn produkter automatisk når filtre endres
  useEffect(() => {
    if (selectedType) {
      loadProducts(selectedType, filters);
    }
  }, [filters]);

  const value = {
    // Eksisterende - brukerens forsikringer
    insurances,
    addInsurance,
    removeInsurance,

    // Nytt - produktsammenligning
    comparisonProducts,
    loadProducts,
    getBestDeals,
    searchProducts,
    getProductById,
    getProductStats,
    getCompaniesForType,

    // Filtre og state
    filters,
    updateFilters,
    clearFilters,
    selectedType,
    loading
  };

  return (
    <InsuranceContext.Provider value={value}>
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
