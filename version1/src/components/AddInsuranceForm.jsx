import React, { useState } from 'react';
import { useInsurance } from '../context/InsuranceContext.jsx';
import '../styles/AddInsuranceForm.css';

const AddInsuranceForm = ({ onSuccess }) => {
  const { addInsurance } = useInsurance();
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    selskap: '',
    dekningstype: '',
    pris: '',
    betalingsintervall: 'måned',
    betalingsdato: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.selskap || !formData.dekningstype || !formData.pris || !formData.betalingsdato) {
      alert('Vennligst fyll ut alle feltene');
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
      betalingsdato: ''
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
          <input
            type="text"
            id="selskap"
            name="selskap"
            value={formData.selskap}
            onChange={handleChange}
            placeholder="F.eks. If Forsikring, Gjensidige, Tryg"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dekningstype">Dekningstype *</label>
          <input
            type="text"
            id="dekningstype"
            name="dekningstype"
            value={formData.dekningstype}
            onChange={handleChange}
            placeholder="F.eks. Innboforsikring, Bilforsikring, Reiseforsikring"
            required
          />
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
          <label htmlFor="betalingsdato">Betalingsdato *</label>
          <input
            type="date"
            id="betalingsdato"
            name="betalingsdato"
            value={formData.betalingsdato}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Legg til avtale
        </button>
      </form>
    </div>
  );
};

export default AddInsuranceForm;
