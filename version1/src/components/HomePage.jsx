import React from 'react';
import '../styles/HomePage.css';

function HomePage({ onNavigateToMyPage }) {
  const insuranceTypes = [
    {
      id: 'bil',
      title: 'Bilforsikring',
      description: 'Sammenlign priser på kasko, ansvar og delkasko for din bil',
      icon: '🚗'
    },
    {
      id: 'innbo',
      title: 'Innboforsikring',
      description: 'Finn beste pris på innboforsikring for bolig og løsøre',
      icon: '🏠'
    },
    {
      id: 'reise',
      title: 'Reiseforsikring',
      description: 'Sammenlign reiseforsikringer for ferie og forretningsreiser',
      icon: '✈️'
    },
    {
      id: 'hus',
      title: 'Husforsikring',
      description: 'Finn riktig dekning for hus, hytte eller borettslag',
      icon: '🏡'
    },
    {
      id: 'ulykke',
      title: 'Ulykkeforsikring',
      description: 'Sikre deg og familien mot ulykker og skader',
      icon: '🩹'
    },
    {
      id: 'dyr',
      title: 'Dyreforsikring',
      description: 'Forsikring for hund, katt og andre kjæledyr',
      icon: '🐕'
    },
    {
      id: 'liv',
      title: 'Livsforsikring',
      description: 'Sikre familiens økonomi ved dødsfall',
      icon: '❤️'
    }
  ];

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Velkommen til Evolve Forsikring</h1>
        <p className="hero-subtitle">
          Vi sammenligner forsikringstilbud fra de beste selskapene i Norge
        </p>
        <p className="hero-description">
          Spar tid og penger ved å sammenligne priser fra flere forsikringsselskaper på ett sted.
          Få oversikt over dine alternativer og velg den forsikringen som passer best for deg.
        </p>
      </div>

      <section className="insurance-types-section">
        <h2>Velg forsikringstype</h2>
        <p className="section-subtitle">Hva ønsker du å sammenligne?</p>
        
        <div className="insurance-grid">
          {insuranceTypes.map((type) => (
            <div key={type.id} className="insurance-card">
              <div className="insurance-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
              <button className="compare-btn">
                Sammenlign tilbud
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-section">
        <button className="cta-btn" onClick={onNavigateToMyPage}>
          Gå til mine forsikringer
        </button>
      </div>
    </div>
  );
}

export default HomePage;
