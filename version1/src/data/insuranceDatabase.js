// Database med forsikringsprodukter
// Data er manuelt innhentet og bør oppdateres regelmessig

export const insuranceProducts = {
  reiseforsikring: [
    {
      id: 'if-reise-basis-europa',
      selskapId: 'if',
      produktnavn: 'Reiseforsikring Basis Europa',
      beskrivelse: 'Grunnleggende dekning for reiser i Europa',

      pris: {
        maned: 89,
        ar: 990,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 5000000,
          beskrivelse: 'Dekning av behandlingskostnader i utlandet'
        },
        avbestilling: {
          belop: 50000,
          egenandel: 2000,
          beskrivelse: 'Ved sykdom, dødsfall eller andre uforutsette hendelser'
        },
        forsinkelse: {
          belop: 10000,
          vilkar: 'Minimum 4 timer forsinkelse',
          beskrivelse: 'Dekning av ekstra utgifter ved forsinkelse'
        },
        bagasje: {
          belop: 30000,
          egenandel: 2000,
          maksPrGjenstand: 15000,
          beskrivelse: 'Dekning av tap, skade eller forsinkelse av bagasje'
        },
        ansvar: {
          belop: 2000000,
          beskrivelse: 'Personskade og tingskade du forårsaker'
        },
        hjemtransport: {
          belop: 'Ubegrenset',
          beskrivelse: 'Medisinsk nødvendig hjemtransport'
        }
      },

      vilkar: {
        geografiskOmrade: ['Europa', 'Middelhavslandene'],
        maksAlder: 70,
        familiedekning: false,
        maksReisevarighet: 45,
        kreverHelseerklaering: false,
        dekkerVinteridretter: false
      },

      ekskluderinger: [
        'Ekstremidrett og farlige aktiviteter',
        'Krig og terrorisme',
        'Eksisterende sykdommer (med visse unntak)',
        'Beruselse og narkotika'
      ],

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reiseforsikring/basis',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 85,
      anbefalt: true
    },

    {
      id: 'if-reise-pluss-verden',
      selskapId: 'if',
      produktnavn: 'Reiseforsikring Pluss Verden',
      beskrivelse: 'Utvidet dekning for reiser over hele verden',

      pris: {
        maned: 149,
        ar: 1650,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 10000000,
          beskrivelse: 'Inkluderer tannbehandling inntil 15.000 kr'
        },
        avbestilling: {
          belop: 100000,
          egenandel: 2000,
          beskrivelse: 'Utvidet dekning ved avbestilling'
        },
        forsinkelse: {
          belop: 15000,
          vilkar: 'Minimum 3 timer forsinkelse',
          beskrivelse: 'Høyere dekning for forsinkelser'
        },
        bagasje: {
          belop: 50000,
          egenandel: 2000,
          maksPrGjenstand: 25000,
          beskrivelse: 'Utvidet bagasjedekning'
        },
        ansvar: {
          belop: 5000000,
          beskrivelse: 'Høyere ansvarsdekning'
        },
        hjemtransport: {
          belop: 'Ubegrenset',
          beskrivelse: 'Medisinsk nødvendig hjemtransport'
        }
      },

      vilkar: {
        geografiskOmrade: ['Hele verden'],
        maksAlder: 75,
        familiedekning: true,
        maksReisevarighet: 90,
        kreverHelseerklaering: false,
        dekkerVinteridretter: true
      },

      ekskluderinger: [
        'Profesjonell idrett',
        'Krig og terrorisme',
        'Beruselse og narkotika'
      ],

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reiseforsikring/pluss',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 92,
      anbefalt: true
    },

    {
      id: 'tryg-reise-basis',
      selskapId: 'tryg',
      produktnavn: 'Reiseforsikring',
      beskrivelse: 'Komplett reiseforsikring for hele familien',

      pris: {
        maned: 95,
        ar: 1050,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 6000000,
          beskrivelse: 'Dekning av medisinsk behandling'
        },
        avbestilling: {
          belop: 60000,
          egenandel: 1500,
          beskrivelse: 'Avbestillingsdekning'
        },
        forsinkelse: {
          belop: 12000,
          vilkar: 'Minimum 4 timer forsinkelse',
          beskrivelse: 'Forsinkelsesdekning'
        },
        bagasje: {
          belop: 35000,
          egenandel: 1500,
          maksPrGjenstand: 20000,
          beskrivelse: 'Bagasjedekning'
        },
        ansvar: {
          belop: 3000000,
          beskrivelse: 'Ansvarsdekning'
        },
        hjemtransport: {
          belop: 'Ubegrenset',
          beskrivelse: 'Hjemtransport ved medisinsk nødvendighet'
        }
      },

      vilkar: {
        geografiskOmrade: ['Hele verden'],
        maksAlder: 70,
        familiedekning: true,
        maksReisevarighet: 60,
        kreverHelseerklaering: false,
        dekkerVinteridretter: false
      },

      ekskluderinger: [
        'Ekstremidrett',
        'Krig',
        'Pandemier (gjelder enkelte dekninger)',
        'Beruselse'
      ],

      metadata: {
        lenke: 'https://www.tryg.no/privat/forsikring/reiseforsikring',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 78,
      anbefalt: false
    },

    {
      id: 'gjensidige-reise-komplett',
      selskapId: 'gjensidige',
      produktnavn: 'Reise Komplett',
      beskrivelse: 'Alt du trenger for trygg reise',

      pris: {
        maned: 119,
        ar: 1320,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 8000000,
          beskrivelse: 'Omfattende medisinsk dekning inkl. tannbehandling'
        },
        avbestilling: {
          belop: 80000,
          egenandel: 2000,
          beskrivelse: 'Høy avbestillingsdekning'
        },
        forsinkelse: {
          belop: 15000,
          vilkar: 'Minimum 3 timer forsinkelse',
          beskrivelse: 'God forsinkelsesdekning'
        },
        bagasje: {
          belop: 45000,
          egenandel: 2000,
          maksPrGjenstand: 22000,
          beskrivelse: 'Høy bagasjedekning'
        },
        ansvar: {
          belop: 4000000,
          beskrivelse: 'Høy ansvarsdekning'
        },
        hjemtransport: {
          belop: 'Ubegrenset',
          beskrivelse: 'Hjemtransport'
        }
      },

      vilkar: {
        geografiskOmrade: ['Hele verden'],
        maksAlder: 75,
        familiedekning: true,
        maksReisevarighet: 70,
        kreverHelseerklaering: false,
        dekkerVinteridretter: true
      },

      ekskluderinger: [
        'Profesjonell idrett',
        'Krig og terror',
        'Selvpåførte skader'
      ],

      metadata: {
        lenke: 'https://www.gjensidige.no/forsikring/reise',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 88,
      anbefalt: true
    },

    {
      id: 'europeiske-reise-europa',
      selskapId: 'europeiske',
      produktnavn: 'Europareise',
      beskrivelse: 'Spesialtilpasset for Europareiser',

      pris: {
        maned: 79,
        ar: 850,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 4000000,
          beskrivelse: 'Medisinsk behandling i Europa'
        },
        avbestilling: {
          belop: 40000,
          egenandel: 2000,
          beskrivelse: 'Avbestillingsdekning'
        },
        forsinkelse: {
          belop: 8000,
          vilkar: 'Minimum 4 timer forsinkelse',
          beskrivelse: 'Forsinkelsesdekning'
        },
        bagasje: {
          belop: 25000,
          egenandel: 2000,
          maksPrGjenstand: 12000,
          beskrivelse: 'Bagasjedekning'
        },
        ansvar: {
          belop: 2000000,
          beskrivelse: 'Ansvarsdekning'
        },
        hjemtransport: {
          belop: 'Ubegrenset',
          beskrivelse: 'Hjemtransport'
        }
      },

      vilkar: {
        geografiskOmrade: ['Europa'],
        maksAlder: 65,
        familiedekning: false,
        maksReisevarighet: 45,
        kreverHelseerklaering: false,
        dekkerVinteridretter: false
      },

      ekskluderinger: [
        'Farlige aktiviteter',
        'Krig',
        'Kjente sykdommer'
      ],

      metadata: {
        lenke: 'https://www.europeiske.no/reiseforsikring',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 72,
      anbefalt: false
    }
  ],

  // Bilforsikring
  bilforsikring: [
    {
      id: 'if-bil-ansvar',
      selskapId: 'if',
      produktnavn: 'Bilforsikring Ansvar',
      beskrivelse: 'Lovpålagt ansvarsforsikring med vegassistanse',

      pris: {
        maned: 350,
        ar: 3900,
        valuta: 'NOK'
      },

      dekninger: {
        ansvar: {
          belop: 100000000,
          beskrivelse: 'Personskade og tingskade'
        },
        vegassistanse: {
          belop: 'Inkludert',
          beskrivelse: 'Hjelp ved bil motorstopp'
        },
        rettshjelp: {
          belop: 150000,
          beskrivelse: 'Juridisk bistand'
        }
      },

      vilkar: {
        egenandel: 0,
        bonustrinn: true,
        maksAlder: 85,
        dekkerLeie: false
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/bilforsikring',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 75,
      anbefalt: false
    },
    {
      id: 'tryg-bil-kasko',
      selskapId: 'tryg',
      produktnavn: 'Bilforsikring Kasko',
      beskrivelse: 'Fullstendig dekning for din bil',

      pris: {
        maned: 650,
        ar: 7200,
        valuta: 'NOK'
      },

      dekninger: {
        ansvar: {
          belop: 100000000,
          beskrivelse: 'Personskade og tingskade'
        },
        kasko: {
          belop: 'Bilens verdi',
          beskrivelse: 'Alle typer skader'
        },
        vegassistanse: {
          belop: 'Inkludert',
          beskrivelse: 'Døgnåpen hjelp'
        },
        erstatningsbil: {
          belop: 10000,
          beskrivelse: 'Inntil 30 dager'
        },
        rettshjelp: {
          belop: 200000,
          beskrivelse: 'Juridisk bistand'
        }
      },

      vilkar: {
        egenandel: 6000,
        bonustrinn: true,
        maksAlder: 85,
        dekkerLeie: true
      },

      metadata: {
        lenke: 'https://www.tryg.no/privat/forsikring/bilforsikring',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 88,
      anbefalt: true
    }
  ],

  // Innboforsikring
  innboforsikring: [
    {
      id: 'gjensidige-innbo-basis',
      selskapId: 'gjensidige',
      produktnavn: 'Innboforsikring Basis',
      beskrivelse: 'Grunnleggende innbodekning',

      pris: {
        maned: 180,
        ar: 2000,
        valuta: 'NOK'
      },

      dekninger: {
        innbo: {
          belop: 1000000,
          beskrivelse: 'Møbler, klær og løsøre'
        },
        ansvar: {
          belop: 5000000,
          beskrivelse: 'Personskade og tingskade'
        },
        reisegods: {
          belop: 50000,
          beskrivelse: 'Ting på reise'
        },
        elektronikk: {
          belop: 50000,
          beskrivelse: 'Datamaskiner, mobil, etc'
        }
      },

      vilkar: {
        egenandel: 4000,
        naturskade: true,
        maksAlder: null,
        dekkerLeie: true
      },

      metadata: {
        lenke: 'https://www.gjensidige.no/forsikring/innbo',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 82,
      anbefalt: true
    }
  ],

  // Dyreforsikring
  dyreforsikring: [
    {
      id: 'if-hund-basis',
      selskapId: 'if',
      produktnavn: 'Hundeforsikring Basis',
      beskrivelse: 'Grunnleggende forsikring for hund',

      pris: {
        maned: 250,
        ar: 2800,
        valuta: 'NOK'
      },

      dekninger: {
        veterinar: {
          belop: 25000,
          beskrivelse: 'Årlig maks for behandling'
        },
        operasjon: {
          belop: 25000,
          beskrivelse: 'Kirurgiske inngrep'
        },
        ansvar: {
          belop: 5000000,
          beskrivelse: 'Skader hundens forårsaker'
        },
        dodsfall: {
          belop: 10000,
          beskrivelse: 'Ved ulykke eller sykdom'
        }
      },

      vilkar: {
        egenandel: '20% av kostnad',
        maksAlder: 10,
        ventetid: '30 dager',
        rasebegrensning: false
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/dyreforsikring',
        datakilde: 'manual',
        sistOppdatert: '2025-11-05',
        oppdatertAv: 'admin'
      },

      popularitet: 70,
      anbefalt: false
    }
  ],

  // Placeholder for resten
  husforsikring: [],
  ulykkeforsikring: [],
  livsforsikring: []
};

// Hjelpefunksjon for å legge til nye produkter (kan brukes senere)
export const addProduct = (type, product) => {
  if (insuranceProducts[type]) {
    insuranceProducts[type].push(product);
  }
};

// Hjelpefunksjon for å få alle produkter på tvers av typer
export const getAllProducts = () => {
  const allProducts = [];
  for (const type in insuranceProducts) {
    allProducts.push(...insuranceProducts[type]);
  }
  return allProducts;
};

// Hjelpefunksjon for å telle antall produkter per type
export const getProductCount = () => {
  const counts = {};
  for (const type in insuranceProducts) {
    counts[type] = insuranceProducts[type].length;
  }
  return counts;
};
