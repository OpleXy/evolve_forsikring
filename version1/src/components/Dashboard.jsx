import React from 'react';
import { useInsurance } from '../context/InsuranceContext.jsx';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { insurances } = useInsurance();

  const getCompanyLogo = (companyName) => {
    const logoMap = {
      'DNB': 'dnb.png',
      'Frende': 'frende.png',
      'Gjensidige': 'gjensidige.png',
      'If': 'if.png',
      'If Forsikring': 'if.png',
      'KLP': 'klp.png',
      'SpareBank 1': 'sparebank1.png',
      'Tryg': 'tryg.png'
    };

    const logoFile = logoMap[companyName];
    return logoFile ? `/assets/logos/${logoFile}` : null;
  };

  const handleSeeAlternatives = (insurance) => {
    // TODO: Implementer API-kall til forsikringsselskap for å hente alternativer
    // TODO: Integrer med BankID for autentisering
    alert(`Se alternativer for ${insurance.selskap} - ${insurance.dekningstype}\n\nDenne funksjonen vil bli implementert senere med:\n- API-kall til forsikringsselskaper\n- BankID autentisering`);
  };

  const formatPrice = (pris, intervall) => {
    return `${pris.toLocaleString('nb-NO')} kr/${intervall}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (insurances.length === 0) {
    return (
      <div className="dashboard">
        <h2>Mine forsikringer</h2>
        <div className="empty-state">
          <h3>Ingen forsikringer lagt til ennå</h3>
          <p>Klikk på "Legg til ny forsikringsavtale" for å komme i gang.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2>Mine forsikringer ({insurances.length})</h2>
      <div className="insurance-grid">
        {insurances.map((insurance) => (
          <div key={insurance.id} className="insurance-card">
            <div className="insurance-card-header">
              {getCompanyLogo(insurance.selskap) && (
                <img
                  src={getCompanyLogo(insurance.selskap)}
                  alt={`${insurance.selskap} logo`}
                  className="company-logo"
                />
              )}
              <h3 className="insurance-company">{insurance.selskap}</h3>
            </div>
            <span className="insurance-type">{insurance.dekningstype}</span>
            <div className="insurance-details">
              <div className="insurance-detail">
                <span className="detail-label">Pris:</span>
                <span className="detail-value price-highlight">
                  {formatPrice(insurance.pris, insurance.betalingsintervall)}
                </span>
              </div>
              <div className="insurance-detail">
                <span className="detail-label">Betalingsdato:</span>
                <span className="detail-value">{formatDate(insurance.betalingsdato)}</span>
              </div>
            </div>
            <button
              className="see-alternatives-btn"
              onClick={() => handleSeeAlternatives(insurance)}
            >
              Se andre alternativer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
