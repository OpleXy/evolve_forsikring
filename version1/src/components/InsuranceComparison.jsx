import React, { useEffect, useState } from 'react';
import { useInsurance } from '../context/InsuranceContext';
import '../styles/InsuranceComparison.css';

function InsuranceComparison({ type }) {
  const {
    comparisonProducts,
    loadProducts,
    filters,
    updateFilters,
    loading,
    getProductStats
  } = useInsurance();

  const [showFilters, setShowFilters] = useState(false);
  const [stats, setStats] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    loadProducts(type);
    setStats(getProductStats(type));
  }, [type]);

  const handleFilterChange = (filterKey, value) => {
    updateFilters({ [filterKey]: value });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('nb-NO', {
      style: 'currency',
      currency: 'NOK',
      minimumFractionDigits: 0
    }).format(price);
  };

  const formatNumber = (num) => {
    if (num === 'Ubegrenset') return num;
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)} mill. kr`;
    }
    return new Intl.NumberFormat('nb-NO').format(num) + ' kr';
  };

  const handleImageError = (companyId) => {
    setImageErrors(prev => ({ ...prev, [companyId]: true }));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="insurance-comparison">
      <div className="comparison-header">
        <h2>Sammenlign {type}</h2>
        {stats && (
          <div className="stats-summary">
            <span>{stats.antallProdukter} produkter</span>
            <span>Fra {formatPrice(stats.laveste)}/mnd</span>
            <span>Gj.snitt {formatPrice(stats.gjennomsnittspris)}/mnd</span>
          </div>
        )}
      </div>

      <div className="filter-bar">
        <button
          className="filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? '✕ Skjul filtre' : '⚙ Vis filtre'}
        </button>

        <div className="sort-options">
          <label>Sorter:</label>
          <select
            value={filters.sorterPa || 'popularitet'}
            onChange={(e) => handleFilterChange('sorterPa', e.target.value)}
          >
            <option value="popularitet">Mest populære</option>
            <option value="pris-lav">Lavest pris</option>
            <option value="pris-hoy">Høyest pris</option>
            <option value="rating">Beste rating</option>
            <option value="dekning">Høyest dekning</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="filter-panel">
          <div className="filter-group">
            <label>Maks pris per måned:</label>
            <input
              type="number"
              placeholder="F.eks. 150"
              value={filters.maxPrisManed || ''}
              onChange={(e) => handleFilterChange('maxPrisManed', e.target.value ? parseFloat(e.target.value) : null)}
            />
          </div>

          {type === 'reiseforsikring' && (
            <>
              <div className="filter-group">
                <label>Geografisk område:</label>
                <select
                  value={filters.geografiskOmrade || ''}
                  onChange={(e) => handleFilterChange('geografiskOmrade', e.target.value)}
                >
                  <option value="">Alle</option>
                  <option value="Europa">Europa</option>
                  <option value="Verden">Hele verden</option>
                </select>
              </div>

              <div className="filter-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={filters.familiedekning || false}
                    onChange={(e) => handleFilterChange('familiedekning', e.target.checked || null)}
                  />
                  Kun med familiedekning
                </label>
              </div>

              <div className="filter-group checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={filters.vinteridretter || false}
                    onChange={(e) => handleFilterChange('vinteridretter', e.target.checked || null)}
                  />
                  Dekker vinteridretter
                </label>
              </div>
            </>
          )}
        </div>
      )}

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Laster produkter...</p>
        </div>
      ) : (
        <div className="products-grid">
          {comparisonProducts.length === 0 ? (
            <div className="no-results">
              <p>Ingen produkter matchet dine filtre</p>
              <button onClick={() => updateFilters({ sorterPa: 'popularitet' })}>
                Nullstill filtre
              </button>
            </div>
          ) : (
            comparisonProducts.map(product => (
              <div key={product.id} className={`product-card ${product.anbefalt ? 'recommended' : ''}`}>
                {product.anbefalt && <div className="recommended-badge">Anbefalt</div>}

                <div className="product-header">
                  <div className="company-info">
                    <div className="company-logo-name">
                      {!imageErrors[product.selskapId] ? (
                        <img
                          src={product.selskap.logo}
                          alt={product.selskap.navn}
                          className="company-logo"
                          onError={() => handleImageError(product.selskapId)}
                        />
                      ) : (
                        <div className="company-logo-fallback">
                          {getInitials(product.selskap.navn)}
                        </div>
                      )}
                      <h3>{product.selskap.navn}</h3>
                    </div>
                    <div className="rating">
                      {'⭐'.repeat(Math.round(product.selskap.rating))}
                      <span>{product.selskap.rating}</span>
                    </div>
                  </div>
                  <div className="price">
                    <span className="amount">{formatPrice(product.pris.maned)}</span>
                    <span className="period">/mnd</span>
                  </div>
                </div>

                <h4 className="product-name">{product.produktnavn}</h4>
                <p className="product-description">{product.beskrivelse}</p>

                <div className="coverage-highlights">
                  {Object.entries(product.dekninger || {}).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="coverage-item">
                      <span className="label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                      <span className="value">
                        {value && value.belop ? formatNumber(value.belop) :
                         typeof value === 'string' ? value :
                         value && typeof value === 'object' ? JSON.stringify(value) :
                         'N/A'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="product-tags">
                  {product.vilkar?.familiedekning && (
                    <span className="tag">👨‍👩‍👧‍👦 Familie</span>
                  )}
                  {product.vilkar?.dekkerVinteridretter && (
                    <span className="tag">⛷️ Vintersport</span>
                  )}
                  {product.vilkar?.geografiskOmrade && product.vilkar.geografiskOmrade.length > 0 && (
                    <span className="tag">📍 {product.vilkar.geografiskOmrade[0]}</span>
                  )}
                  {product.vilkar?.egenandel !== undefined && (
                    <span className="tag">
                      Egenandel: {typeof product.vilkar.egenandel === 'number'
                        ? formatNumber(product.vilkar.egenandel) + ' kr'
                        : product.vilkar.egenandel}
                    </span>
                  )}
                </div>

                <div className="product-actions">
                  <a
                    href={product.metadata.lenke}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Se detaljer
                  </a>
                  <button className="btn-secondary">
                    Sammenlign
                  </button>
                </div>

                <div className="last-updated">
                  Oppdatert: {new Date(product.metadata.sistOppdatert).toLocaleDateString('nb-NO')}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <div className="disclaimer">
        ⓘ Prisene er veiledende og kan variere basert på alder, helsetilstand og andre faktorer.
        Kontakt forsikringsselskapet for eksakt pris og fullstendige vilkår.
      </div>
    </div>
  );
}

export default InsuranceComparison;
