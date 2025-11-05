import React, { useState, useEffect, useRef } from 'react';
import { useInsurance } from '../context/InsuranceContext.jsx';
import { getAllCompanies } from '../data/companies';
import '../styles/AddInsuranceForm.css';

const AddInsuranceForm = ({ onSuccess }) => {
  const { addInsurance } = useInsurance();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    selskap: '',
    dekningstype: '',
    pris: '',
    betalingsintervall: 'måned',
    betalingsdato: '',
    betalingsdag: '',
    betalingsmaned: ''
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: value
      };

      // If changing payment interval, reset payment date fields
      if (name === 'betalingsintervall') {
        updated.betalingsdato = '';
        updated.betalingsdag = '';
        updated.betalingsmaned = '';
      }

      // If monthly payment, construct date from day
      if (prev.betalingsintervall === 'måned' && name === 'betalingsdag') {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(value).padStart(2, '0');
        updated.betalingsdato = `${year}-${month}-${day}`;
      }

      // If yearly payment, construct date from day and month
      if (prev.betalingsintervall === 'år' && (name === 'betalingsdag' || name === 'betalingsmaned')) {
        const dag = name === 'betalingsdag' ? value : prev.betalingsdag;
        const maned = name === 'betalingsmaned' ? value : prev.betalingsmaned;

        if (dag && maned) {
          const today = new Date();
          const year = today.getFullYear();
          const month = String(maned).padStart(2, '0');
          const day = String(dag).padStart(2, '0');
          updated.betalingsdato = `${year}-${month}-${day}`;
        }
      }

      return updated;
    });
  };

  const handleCompanySelect = (companyName) => {
    setFormData(prev => ({
      ...prev,
      selskap: companyName
    }));
    setIsCompanyDropdownOpen(false);
  };

  const getSelectedCompany = () => {
    return getAllCompanies().find(c => c.navn === formData.selskap);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.selskap || !formData.dekningstype || !formData.pris) {
      alert('Vennligst fyll ut alle feltene');
      return;
    }

    // Validate payment date based on interval
    if (formData.betalingsintervall === 'måned' && !formData.betalingsdag) {
      alert('Vennligst fyll inn betalingsdag');
      return;
    }

    if (formData.betalingsintervall === 'år' && (!formData.betalingsdag || !formData.betalingsmaned)) {
      alert('Vennligst fyll inn betalingsdag og måned');
      return;
    }

    // Add insurance
    addInsurance({
      ...formData,
      pris: parseFloat(formData.pris)
    });

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      selskap: '',
      dekningstype: '',
      pris: '',
      betalingsintervall: 'måned',
      betalingsdato: '',
      betalingsdag: '',
      betalingsmaned: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Notify parent component if callback provided
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="add-insurance-form">
      <h2>Legg til ny forsikringsavtale</h2>

      {showSuccess && (
        <div className="success-message">
          ✓ Forsikringen ble lagt til!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selskap">Forsikringsselskap *</label>
          <div className="custom-dropdown" ref={dropdownRef}>
            <div
              className="custom-dropdown-selected"
              onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
            >
              {formData.selskap ? (
                <>
                  <img
                    src={getSelectedCompany()?.logo}
                    alt={formData.selskap}
                    className="dropdown-logo"
                  />
                  <span>{formData.selskap}</span>
                </>
              ) : (
                <span className="placeholder">Velg forsikringsselskap</span>
              )}
              <span className="dropdown-arrow">{isCompanyDropdownOpen ? '▲' : '▼'}</span>
            </div>
            {isCompanyDropdownOpen && (
              <div className="custom-dropdown-options">
                {getAllCompanies().map(company => (
                  <div
                    key={company.id}
                    className="custom-dropdown-option"
                    onClick={() => handleCompanySelect(company.navn)}
                  >
                    <img
                      src={company.logo}
                      alt={company.navn}
                      className="dropdown-logo"
                    />
                    <span>{company.navn}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dekningstype">Dekningstype *</label>
          <select
            id="dekningstype"
            name="dekningstype"
            value={formData.dekningstype}
            onChange={handleChange}
            required
          >
            <option value="">Velg dekningstype</option>
            <option value="Reiseforsikring">Reiseforsikring</option>
            <option value="Bilforsikring">Bilforsikring</option>
            <option value="Innboforsikring">Innboforsikring</option>
            <option value="Husforsikring">Husforsikring</option>
            <option value="Ulykkeforsikring">Ulykkeforsikring</option>
            <option value="Dyreforsikring">Dyreforsikring</option>
            <option value="Livsforsikring">Livsforsikring</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="pris">Pris (kr) *</label>
            <input
              type="number"
              id="pris"
              name="pris"
              value={formData.pris}
              onChange={handleChange}
              placeholder="F.eks. 250"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="betalingsintervall">Betalingsintervall *</label>
            <select
              id="betalingsintervall"
              name="betalingsintervall"
              value={formData.betalingsintervall}
              onChange={handleChange}
              required
            >
              <option value="måned">Per måned</option>
              <option value="år">Per år</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="betalingsdato">
            {formData.betalingsintervall === 'måned' ? 'Betalingsdag i måneden *' : 'Betalingsdato *'}
          </label>
          {formData.betalingsintervall === 'måned' ? (
            <input
              type="number"
              id="betalingsdag"
              name="betalingsdag"
              value={formData.betalingsdag}
              onChange={handleChange}
              placeholder="Dag (1-31)"
              min="1"
              max="31"
              required
            />
          ) : (
            <div className="date-input-row">
              <div className="date-input-group">
                <label htmlFor="betalingsdag" className="small-label">Dag</label>
                <input
                  type="number"
                  id="betalingsdag"
                  name="betalingsdag"
                  value={formData.betalingsdag}
                  onChange={handleChange}
                  placeholder="1-31"
                  min="1"
                  max="31"
                  required
                />
              </div>
              <div className="date-input-group">
                <label htmlFor="betalingsmaned" className="small-label">Måned</label>
                <select
                  id="betalingsmaned"
                  name="betalingsmaned"
                  value={formData.betalingsmaned}
                  onChange={handleChange}
                  required
                >
                  <option value="">Velg</option>
                  <option value="1">Januar</option>
                  <option value="2">Februar</option>
                  <option value="3">Mars</option>
                  <option value="4">April</option>
                  <option value="5">Mai</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Legg til avtale
        </button>
      </form>
    </div>
  );
};

export default AddInsuranceForm;
