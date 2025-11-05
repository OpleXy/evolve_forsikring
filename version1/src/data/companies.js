// Norske forsikringsselskaper
export const companies = {
  if: {
    id: 'if',
    navn: 'If Forsikring',
    logo: '/assets/logos/if.png',
    nettside: 'https://www.if.no',
    kundeservice: '02400',
    epost: 'kundeservice@if.no',
    rating: 4.2,
    beskrivelse: 'Et av Nordens største skadeforsikringsselskaper',
    etablert: 1999
  },
  tryg: {
    id: 'tryg',
    navn: 'Tryg',
    logo: '/assets/logos/tryg.png',
    nettside: 'https://www.tryg.no',
    kundeservice: '915 05400',
    epost: 'kundeservice@tryg.no',
    rating: 4.0,
    beskrivelse: 'Norges nest største skadeforsikringsselskap',
    etablert: 1997
  },
  gjensidige: {
    id: 'gjensidige',
    navn: 'Gjensidige',
    logo: '/assets/logos/gjensidige.png',
    nettside: 'https://www.gjensidige.no',
    kundeservice: '915 03000',
    epost: 'kundeservice@gjensidige.no',
    rating: 4.3,
    beskrivelse: 'Norges største private skadeforsikringsselskap',
    etablert: 1816
  },
  frende: {
    id: 'frende',
    navn: 'Frende',
    logo: '/assets/logos/frende.png',
    nettside: 'https://www.frende.no',
    kundeservice: '04800',
    epost: 'kundeservice@frende.no',
    rating: 4.1,
    beskrivelse: 'Kundeeid forsikringsselskap med lokalt engasjement',
    etablert: 2004
  },
  europeiske: {
    id: 'europeiske',
    navn: 'Europeiske',
    logo: '/assets/logos/europeiske.png',
    nettside: 'https://www.europeiske.no',
    kundeservice: '22 87 50 00',
    epost: 'kundeservice@europeiske.no',
    rating: 3.9,
    beskrivelse: 'Reiseforsikring og skadeforsikring siden 1872',
    etablert: 1872
  },
  sparebank1: {
    id: 'sparebank1',
    navn: 'SpareBank 1 Forsikring',
    logo: '/assets/logos/sparebank1.png',
    nettside: 'https://www.sparebank1.no/forsikring',
    kundeservice: '915 05250',
    epost: 'kundeservice@sparebank1.no',
    rating: 4.0,
    beskrivelse: 'Forsikring gjennom SpareBank 1-alliansen',
    etablert: 1990
  },
  dnb: {
    id: 'dnb',
    navn: 'DNB Forsikring',
    logo: '/assets/logos/dnb.png',
    nettside: 'https://www.dnb.no/forsikring',
    kundeservice: '915 04800',
    epost: 'kundeservice.forsikring@dnb.no',
    rating: 3.8,
    beskrivelse: 'Forsikring fra Norges største bank',
    etablert: 1990
  }
};

// Hjelpefunksjon for å hente selskap
export const getCompany = (id) => companies[id];

// Hjelpefunksjon for å hente alle selskaper som array
export const getAllCompanies = () => Object.values(companies);

// Hjelpefunksjon for å sortere etter rating
export const getCompaniesByRating = () => {
  return getAllCompanies().sort((a, b) => b.rating - a.rating);
};
