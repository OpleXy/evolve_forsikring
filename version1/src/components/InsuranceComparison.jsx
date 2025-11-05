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
  const [reportingDeviation, setReportingDeviation] = useState(false);
  const [expandedCoverage, setExpandedCoverage] = useState({});

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

  const handleReportDeviation = () => {
    setReportingDeviation(true);
    // TODO: Implementer rapportering av avvik
    alert('Takk for din tilbakemelding! Vi vil gjennomgå og oppdatere prisene dersom det er avvik.');
    setTimeout(() => setReportingDeviation(false), 2000);
  };

  const toggleCoverageDetails = (productId) => {
    setExpandedCoverage(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const getCoverageCategories = (dekninger) => {
    return {
      'Sykdom, ulykke og evakuering': [
        { key: 'medisinsk', label: 'Utgifter ved sykdom eller ulykke på reise' },
        { key: 'evakuering', label: 'Evakuering' },
        { key: 'digitalLegetime', label: 'Digital legetime' },
        { key: 'psykologiskForstehjelp', label: 'Psykologisk førstehjelp ved en alvorlig hendelse' },
      ],
      'Avbestilling og forsinkelser': [
        { key: 'avbestilling', label: 'Avbestilling av reise' },
        { key: 'forsinkelse', label: 'Utgifter til reise og overnatting ved forsinkelser' },
        { key: 'forsinketBagasje', label: 'Forsinket bagasje' },
        { key: 'tapteFeriedager', label: 'Kompensasjon for tapte feriedager' },
        { key: 'smartDelay', label: 'Flyforsinkelse – lounge med SmartDelay+' },
        { key: 'taptHotell', label: 'Kompensasjon for leiebil, arrangement og hotell ved forsinkelse' },
        { key: 'avlystArrangement', label: 'Avbestilling på grunn av avlyst offentlig arrangement' },
      ],
      'Tyveri og skade på eiendeler': [
        { key: 'bagasje', label: 'Tyveri eller skade på personlige eiendeler' },
        { key: 'uhellsskader', label: 'Uhellsforsikring på eiendeler' },
        { key: 'uhellsforsikring', label: 'Uhellsforsikring på eiendeler' },
        { key: 'egenandelsdekning', label: 'Egenandel ved skade på leiebil og andre transportmidler på ferie' },
        { key: 'leiebilforsikring', label: 'Egenandel ved skade på leiebil og andre transportmidler på ferie' },
      ],
      'Øvrige dekninger': [
        { key: 'idTyveri', label: 'ID-tyveri' },
        { key: 'rettshjelp', label: 'Rettshjelp og ansvarsforsikring utenfor Norden' },
        { key: 'ekstremsport', label: 'Ekstremsport' },
        { key: 'skadedyr', label: 'Bekjempelse av skadedyr etter en utenlandsreise' },
        { key: 'supergaranti', label: 'Supergaranti – når du flytter reiseforsikringen til oss' },
      ]
    };
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
                  </div>
                  <div className="price">
                    <span className="amount">{formatPrice(product.pris.maned)}</span>
                    <span className="period">/mnd</span>
                  </div>
                </div>

                <h4 className="product-name">{product.produktnavn}</h4>
                <p className="product-description">{product.beskrivelse}</p>

                <div className="coverage-categories">
                  <div className="category-highlight">
                    <h5>
                      <img src="/assets/icons/yes.png" alt="✓" className="category-icon" />
                      Sykdom, ulykke og evakuering
                    </h5>
                    <div className="info-icon-wrapper">
                      <img src="/assets/icons/info.png" alt="Info" className="info-icon" />
                      <div className="info-tooltip">
                        Ubegrenset eller høy dekning for medisinske utgifter, evakuering og hjemtransport.
                      </div>
                    </div>
                  </div>

                  {product.dekninger.avbestilling && (
                    <div className="category-highlight">
                      <h5>
                        <img src="/assets/icons/yes.png" alt="✓" className="category-icon" />
                        Avbestilling og forsinkelser
                      </h5>
                      <div className="info-icon-wrapper">
                        <img src="/assets/icons/info.png" alt="Info" className="info-icon" />
                        <div className="info-tooltip">
                          Økonomisk trygghet før og under reisen ved avlysning eller forsinkelser.
                        </div>
                      </div>
                    </div>
                  )}

                  {product.dekninger.bagasje && (
                    <div className="category-highlight">
                      <h5>
                        <img src="/assets/icons/yes.png" alt="✓" className="category-icon" />
                        Tyveri og skade på eiendeler
                      </h5>
                      <div className="info-icon-wrapper">
                        <img src="/assets/icons/info.png" alt="Info" className="info-icon" />
                        <div className="info-tooltip">
                          Dekning for tyveri, ran eller skade på mobil, PC, kamera og bagasje.
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className="coverage-details-btn"
                  onClick={() => toggleCoverageDetails(product.id)}
                >
                  {expandedCoverage[product.id] ? '▲ Skjul alle dekninger' : '▼ Les alt av dekninger'}
                </button>

                {expandedCoverage[product.id] && (
                  <div className="coverage-table">
                    {Object.entries(getCoverageCategories(product.dekninger)).map(([category, items]) => (
                      <div key={category} className="coverage-category">
                        <h6>{category}</h6>
                        <ul>
                          {items.map(item => (
                            <li key={item.key} className={product.dekninger[item.key] ? 'included' : 'not-included'}>
                              <img
                                src={product.dekninger[item.key] ? '/assets/icons/yes.png' : '/assets/icons/no.png'}
                                alt={product.dekninger[item.key] ? '✓' : '✗'}
                                className="check-icon"
                              />
                              <span className="coverage-label">{item.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

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

      <div className="disclaimer-section">
        <div className="disclaimer">
          <strong>ⓘ Viktig informasjon om priser:</strong>
          <p>
            Disse prisene kan variere fra person til person, ettersom forskjellige vilkår gjelder.
            Dette er kun veiledende priser som vil hjelpe med å få et oversiktsbilde på hvilken aktør
            som er mest gunstig. Kontakt forsikringsselskapet direkte for eksakte priser basert på
            din personlige situasjon.
          </p>
        </div>
        <button
          className="report-deviation-btn"
          onClick={handleReportDeviation}
          disabled={reportingDeviation}
        >
          {reportingDeviation ? 'Takk for tilbakemeldingen!' : '📝 Rapporter avvik i priser'}
        </button>
      </div>
    </div>
  );
}

export default InsuranceComparison;
