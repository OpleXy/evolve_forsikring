// Service for håndtering av forsikringsdata
import { insuranceProducts } from '../data/insuranceDatabase';
import { companies } from '../data/companies';
import { productTypes } from '../data/productTypes';

class InsuranceService {
  /**
   * Hent alle produkter av en bestemt type
   * @param {string} type - Forsikringstype (f.eks. 'reiseforsikring')
   * @returns {Array} Array med produkter
   */
  getProductsByType(type) {
    return insuranceProducts[type] || [];
  }

  /**
   * Hent ett spesifikt produkt med full info
   * @param {string} id - Produkt ID
   * @returns {Object|null} Produkt med selskaps- og typeinfo
   */
  getProductById(id) {
    for (const type in insuranceProducts) {
      const product = insuranceProducts[type].find(p => p.id === id);
      if (product) {
        return {
          ...product,
          selskap: companies[product.selskapId],
          type: productTypes[type]
        };
      }
    }
    return null;
  }

  /**
   * Sammenlign og filtrer produkter
   * @param {string} type - Forsikringstype
   * @param {Object} filters - Filtreringsparametere
   * @returns {Array} Filtrerte og sorterte produkter
   */
  compareProducts(type, filters = {}) {
    let products = this.getProductsByType(type);

    // Filtrer på pris (månedlig)
    if (filters.maxPrisManed) {
      products = products.filter(p =>
        p.pris.maned <= filters.maxPrisManed
      );
    }

    // Filtrer på pris (årlig)
    if (filters.maxPrisAr) {
      products = products.filter(p =>
        p.pris.ar <= filters.maxPrisAr
      );
    }

    // Filtrer på geografisk område
    if (filters.geografiskOmrade) {
      products = products.filter(p =>
        p.vilkar.geografiskOmrade.some(omrade =>
          omrade.toLowerCase().includes(filters.geografiskOmrade.toLowerCase())
        )
      );
    }

    // Filtrer på familiedekning
    if (filters.familiedekning === true) {
      products = products.filter(p =>
        p.vilkar.familiedekning === true
      );
    }

    // Filtrer på maksimal reisevarighet (for reiseforsikring)
    if (filters.minReisevarighet) {
      products = products.filter(p =>
        p.vilkar.maksReisevarighet >= filters.minReisevarighet
      );
    }

    // Filtrer på vinteridretter
    if (filters.vinteridretter === true) {
      products = products.filter(p =>
        p.vilkar.dekkerVinteridretter === true
      );
    }

    // Filtrer på alder
    if (filters.alder) {
      products = products.filter(p =>
        p.vilkar.maksAlder >= filters.alder
      );
    }

    // Filtrer på selskap
    if (filters.selskap && filters.selskap.length > 0) {
      products = products.filter(p =>
        filters.selskap.includes(p.selskapId)
      );
    }

    // Filtrer på minimum medisinsk dekning
    if (filters.minMedisinsk) {
      products = products.filter(p =>
        p.dekninger.medisinsk?.belop >= filters.minMedisinsk
      );
    }

    // Sortering
    if (filters.sorterPa === 'pris-lav') {
      products.sort((a, b) => a.pris.maned - b.pris.maned);
    } else if (filters.sorterPa === 'pris-hoy') {
      products.sort((a, b) => b.pris.maned - a.pris.maned);
    } else if (filters.sorterPa === 'popularitet') {
      products.sort((a, b) => b.popularitet - a.popularitet);
    } else if (filters.sorterPa === 'rating') {
      products.sort((a, b) => {
        const ratingA = companies[a.selskapId]?.rating || 0;
        const ratingB = companies[b.selskapId]?.rating || 0;
        return ratingB - ratingA;
      });
    } else if (filters.sorterPa === 'dekning') {
      // Sorter etter medisinsk dekningsbeløp
      products.sort((a, b) =>
        (b.dekninger.medisinsk?.belop || 0) - (a.dekninger.medisinsk?.belop || 0)
      );
    }

    // Kun anbefalte produkter
    if (filters.kunAnbefalte === true) {
      products = products.filter(p => p.anbefalt === true);
    }

    // Berik med selskapsinfo
    return products.map(p => ({
      ...p,
      selskap: companies[p.selskapId]
    }));
  }

  /**
   * Søk på tvers av alle produkttyper
   * @param {string} query - Søkeord
   * @returns {Array} Søkeresultater
   */
  searchProducts(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();

    for (const type in insuranceProducts) {
      const matches = insuranceProducts[type].filter(p =>
        p.produktnavn.toLowerCase().includes(lowerQuery) ||
        p.beskrivelse.toLowerCase().includes(lowerQuery) ||
        companies[p.selskapId]?.navn.toLowerCase().includes(lowerQuery)
      );

      results.push(...matches.map(m => ({
        ...m,
        type: productTypes[type],
        selskap: companies[m.selskapId]
      })));
    }

    return results;
  }

  /**
   * Finn beste tilbud basert på kriterier
   * @param {string} type - Forsikringstype
   * @param {Object} criteria - Kriterier for vurdering
   * @returns {Array} Top 3 beste tilbud
   */
  getBestDeals(type, criteria = {}) {
    const products = this.compareProducts(type, criteria);

    // Enkel scoring-algoritme
    const scoredProducts = products.map(p => {
      let score = 0;

      // Lavere pris = høyere score (30% vekt)
      const maxPris = 200;
      score += ((maxPris - p.pris.maned) / maxPris) * 30;

      // Høyere dekninger = høyere score (20% vekt)
      if (p.dekninger.medisinsk?.belop) {
        score += (p.dekninger.medisinsk.belop / 10000000) * 20;
      }
      if (p.dekninger.avbestilling?.belop) {
        score += (p.dekninger.avbestilling.belop / 100000) * 10;
      }

      // Popularitet (25% vekt)
      score += (p.popularitet / 100) * 25;

      // Selskapsrating (15% vekt)
      const rating = companies[p.selskapId]?.rating || 0;
      score += (rating / 5) * 15;

      // Familiedekning gir bonus
      if (p.vilkar.familiedekning) {
        score += 5;
      }

      // Anbefalt gir bonus
      if (p.anbefalt) {
        score += 10;
      }

      return { ...p, score: Math.round(score * 10) / 10 };
    });

    return scoredProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }

  /**
   * Sammenlign spesifikke produkter side-ved-side
   * @param {Array} productIds - Array med produkt-IDer
   * @returns {Array} Produkter med sammenlignbar data
   */
  compareSpecificProducts(productIds) {
    return productIds.map(id => this.getProductById(id)).filter(p => p !== null);
  }

  /**
   * Hent statistikk om produkter
   * @param {string} type - Forsikringstype
   * @returns {Object} Statistikk
   */
  getProductStats(type) {
    const products = this.getProductsByType(type);

    if (products.length === 0) {
      return null;
    }

    const priser = products.map(p => p.pris.maned);
    const avgPris = priser.reduce((sum, p) => sum + p, 0) / priser.length;
    const minPris = Math.min(...priser);
    const maxPris = Math.max(...priser);

    return {
      antallProdukter: products.length,
      gjennomsnittspris: Math.round(avgPris),
      laveste: minPris,
      hoyeste: maxPris,
      antallMedFamiliedekning: products.filter(p => p.vilkar.familiedekning).length,
      antallAnbefalte: products.filter(p => p.anbefalt).length
    };
  }

  /**
   * Hent alle unike selskaper for en forsikringstype
   * @param {string} type - Forsikringstype
   * @returns {Array} Array med selskaper
   */
  getCompaniesForType(type) {
    const products = this.getProductsByType(type);
    const companyIds = [...new Set(products.map(p => p.selskapId))];
    return companyIds.map(id => companies[id]).filter(c => c);
  }

  /**
   * Sjekk når data sist ble oppdatert
   * @param {string} type - Forsikringstype
   * @returns {string} Siste oppdateringsdato
   */
  getLastUpdated(type) {
    const products = this.getProductsByType(type);
    if (products.length === 0) return null;

    const dates = products.map(p => new Date(p.metadata.sistOppdatert));
    const latest = new Date(Math.max(...dates));

    return latest.toLocaleDateString('nb-NO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  /**
   * Valider om et produkt oppfyller brukerens behov
   * @param {string} productId - Produkt ID
   * @param {Object} needs - Brukerens behov
   * @returns {Object} Valideringsresultat med anbefalinger
   */
  validateProductForNeeds(productId, needs) {
    const product = this.getProductById(productId);
    if (!product) return null;

    const warnings = [];
    const matches = [];

    // Sjekk alder
    if (needs.alder && product.vilkar.maksAlder < needs.alder) {
      warnings.push(`Du er over maksimal alder (${product.vilkar.maksAlder} år) for dette produktet`);
    } else if (needs.alder) {
      matches.push('Alderskrav oppfylt');
    }

    // Sjekk geografisk område
    if (needs.reisemaal && !product.vilkar.geografiskOmrade.some(omrade =>
      omrade.toLowerCase().includes(needs.reisemaal.toLowerCase())
    )) {
      warnings.push(`Reisemålet "${needs.reisemaal}" er kanskje ikke dekket`);
    }

    // Sjekk reisevarighet
    if (needs.reisevarighet && product.vilkar.maksReisevarighet < needs.reisevarighet) {
      warnings.push(`Reisen din er lengre enn maksimal varighet (${product.vilkar.maksReisevarighet} dager)`);
    } else if (needs.reisevarighet) {
      matches.push('Reisevarighet er innenfor grensene');
    }

    // Sjekk familiedekning
    if (needs.familiedekning && !product.vilkar.familiedekning) {
      warnings.push('Dette produktet har ikke familiedekning');
    } else if (needs.familiedekning) {
      matches.push('Familiedekning inkludert');
    }

    // Sjekk vinteridretter
    if (needs.vinteridretter && !product.vilkar.dekkerVinteridretter) {
      warnings.push('Vinteridretter er ikke dekket');
    } else if (needs.vinteridretter) {
      matches.push('Vinteridretter er dekket');
    }

    return {
      product,
      suitability: warnings.length === 0 ? 'Utmerket' : warnings.length <= 2 ? 'Akseptabel' : 'Ikke anbefalt',
      warnings,
      matches
    };
  }
}

export default new InsuranceService();
