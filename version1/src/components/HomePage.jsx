import React, { useMemo } from 'react';
import insuranceService from '../services/insuranceService';
import '../styles/HomePage.css';

function HomePage({ onNavigateToMyPage, onNavigateToComparison }) {
  const insuranceTypes = [
    {
      id: 'bilforsikring',
      title: 'Bilforsikring',
      description: 'Sammenlign priser på kasko, ansvar og delkasko for din bil',
      icon: '🚗'
    },
    {
      id: 'innboforsikring',
      title: 'Innboforsikring',
      description: 'Finn beste pris på innboforsikring for bolig og løsøre',
      icon: '🏠'
    },
    {
      id: 'reiseforsikring',
      title: 'Reiseforsikring',
      description: 'Sammenlign reiseforsikringer for ferie og forretningsreiser',
      icon: '✈️'
    },
    {
      id: 'husforsikring',
      title: 'Husforsikring',
      description: 'Finn riktig dekning for hus, hytte eller borettslag',
      icon: '🏡'
    },
    {
      id: 'ulykkeforsikring',
      title: 'Ulykkeforsikring',
      description: 'Sikre deg og familien mot ulykker og skader',
      icon: '🩹'
    },
    {
      id: 'dyreforsikring',
      title: 'Dyreforsikring',
      description: 'Forsikring for hund, katt og andre kjæledyr',
      icon: '🐕'
    },
    {
      id: 'livsforsikring',
      title: 'Livsforsikring',
      description: 'Sikre familiens økonomi ved dødsfall',
      icon: '❤️'
    }
  ];

  // Hent prisinfo og selskaper for hver forsikringstype
  const priceRanges = useMemo(() => {
    const ranges = {};
    insuranceTypes.forEach(type => {
      const stats = insuranceService.getProductStats(type.id);
      const companies = insuranceService.getCompaniesForType(type.id);
      // Sorter etter pris (lavest først)
      const products = insuranceService.compareProducts(type.id, { sorterPa: 'pris-lav' });
      ranges[type.id] = {
        ...stats,
        companies: companies,
        sortedProducts: products
      };
    });
    return ranges;
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('nb-NO', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

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
          {insuranceTypes.map((type) => {
            const priceInfo = priceRanges[type.id];
            return (
              <div key={type.id} className="insurance-card">
                {priceInfo && priceInfo.antallProdukter > 0 ? (
                  <div className="price-range">
                    Fra: {formatPrice(priceInfo.laveste)} kr - {formatPrice(priceInfo.hoyeste)} kr/mnd
                  </div>
                ) : (
                  <div className="price-range no-products">
                    Kommer snart
                  </div>
                )}

                <div className="insurance-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>

                <button
                  className="compare-btn"
                  onClick={() => onNavigateToComparison(type.id)}
                  disabled={!priceInfo || priceInfo.antallProdukter === 0}
                >
                  {priceInfo && priceInfo.antallProdukter > 0
                    ? 'Sammenlign tilbud'
                    : 'Kommer snart'}
                </button>
              </div>
            );
          })}
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
