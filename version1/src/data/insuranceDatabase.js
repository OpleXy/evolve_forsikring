// Database med forsikringsprodukter
// Data er manuelt innhentet og bør oppdateres regelmessig

export const insuranceProducts = {
  reiseforsikring: [
    {
      id: 'if-reise-basis',
      selskapId: 'if',
      produktnavn: 'Helårs reiseforsikring Basis',
      beskrivelse: 'Grunnleggende beskyttelse for reiser i Norge og utlandet (familiedekning)',

      pris: {
        maned: 164,
        ar: 1968,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 'Inkludert',
          beskrivelse: 'Sykdom og ulykke på reise'
        },
        evakuering: {
          belop: 'Inkludert',
          beskrivelse: 'Evakuering ved nødssituasjon'
        },
        digitalLegetime: {
          belop: 'Inkludert',
          beskrivelse: 'Digital legetime ved behov'
        },
        psykologiskForstehjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Psykologisk førstehjelp ved alvorlig hendelse'
        },
        idTyveri: {
          belop: 'Inkludert',
          beskrivelse: 'Beskyttelse mot ID-tyveri'
        },
        rettshjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Rettshjelp og ansvar utenfor Norden'
        },
        ekstremsport: {
          belop: 'Inkludert',
          beskrivelse: 'Dekning ved ekstremsport'
        }
      },

      vilkar: {
        geografiskOmrade: ['Norge', 'Europa', 'Verden'],
        familiedekning: true,
        familiealternativer: ['Meg selv', 'Meg selv og min familie'],
        maksReisevarighet: 45,
        alternativeReisevarigheter: [45, 90, 180],
        dekkerVinteridretter: false,
        maksAlder: 100,
        egenandel: 0
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reise/reiseforsikring/kjop',
        dokument: 'https://if.no/apps/vilkarsbasendokument/IPID?ipid=Hel%C3%A5rs_reiseforsikring',
        sistOppdatert: '2025-11-05',
        kilde: 'If Skadeforsikring NUF'
      },

      popularitet: 85,
      anbefalt: false
    },
    {
      id: 'if-reise-standard',
      selskapId: 'if',
      produktnavn: 'Helårs reiseforsikring Standard',
      beskrivelse: 'Fullverdig dekning for de fleste - inkluderer alt i Basis pluss avbestilling, bagasje og forsinkelse',

      pris: {
        maned: 200,
        ar: 2400,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 'Inkludert',
          beskrivelse: 'Sykdom og ulykke på reise'
        },
        evakuering: {
          belop: 'Inkludert',
          beskrivelse: 'Evakuering ved nødssituasjon'
        },
        digitalLegetime: {
          belop: 'Inkludert',
          beskrivelse: 'Digital legetime ved behov'
        },
        psykologiskForstehjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Psykologisk førstehjelp ved alvorlig hendelse'
        },
        idTyveri: {
          belop: 'Inkludert',
          beskrivelse: 'Beskyttelse mot ID-tyveri'
        },
        rettshjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Rettshjelp og ansvar utenfor Norden'
        },
        ekstremsport: {
          belop: 'Inkludert',
          beskrivelse: 'Dekning ved ekstremsport'
        },
        avbestilling: {
          belop: 'Inkludert',
          beskrivelse: 'Avbestilling av reise'
        },
        bagasje: {
          belop: 'Inkludert',
          beskrivelse: 'Tyveri eller skade på eiendeler'
        },
        forsinketBagasje: {
          belop: 'Inkludert',
          beskrivelse: 'Forsinket bagasje'
        },
        forsinkelse: {
          belop: 'Inkludert',
          beskrivelse: 'Kostnader ved forsinkelse (reise, overnatting osv.)'
        },
        tapteFeriedager: {
          belop: 'Inkludert',
          beskrivelse: 'Kompensasjon for tapte feriedager'
        }
      },

      vilkar: {
        geografiskOmrade: ['Norge', 'Europa', 'Verden'],
        familiedekning: true,
        familiealternativer: ['Meg selv', 'Meg selv og min familie'],
        maksReisevarighet: 45,
        alternativeReisevarigheter: [45, 90, 180],
        dekkerVinteridretter: false,
        maksAlder: 100,
        egenandel: 0
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reise/reiseforsikring/kjop',
        dokument: 'https://if.no/apps/vilkarsbasendokument/IPID?ipid=Hel%C3%A5rs_reiseforsikring',
        sistOppdatert: '2025-11-05',
        kilde: 'If Skadeforsikring NUF'
      },

      popularitet: 92,
      anbefalt: true
    },
    {
      id: 'if-reise-super',
      selskapId: 'if',
      produktnavn: 'Helårs reiseforsikring Super',
      beskrivelse: 'Maksimal dekning og flere tillegg - inkluderer alt i Standard pluss SmartDelay+, egenandelsdekning og mer',

      pris: {
        maned: 326,
        ar: 3912,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 'Inkludert',
          beskrivelse: 'Sykdom og ulykke på reise'
        },
        evakuering: {
          belop: 'Inkludert',
          beskrivelse: 'Evakuering ved nødssituasjon'
        },
        digitalLegetime: {
          belop: 'Inkludert',
          beskrivelse: 'Digital legetime ved behov'
        },
        psykologiskForstehjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Psykologisk førstehjelp ved alvorlig hendelse'
        },
        idTyveri: {
          belop: 'Inkludert',
          beskrivelse: 'Beskyttelse mot ID-tyveri'
        },
        rettshjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Rettshjelp og ansvar utenfor Norden'
        },
        ekstremsport: {
          belop: 'Inkludert',
          beskrivelse: 'Dekning ved ekstremsport'
        },
        avbestilling: {
          belop: 'Inkludert',
          beskrivelse: 'Avbestilling av reise'
        },
        bagasje: {
          belop: 'Inkludert',
          beskrivelse: 'Tyveri eller skade på eiendeler'
        },
        forsinketBagasje: {
          belop: 'Inkludert',
          beskrivelse: 'Forsinket bagasje'
        },
        forsinkelse: {
          belop: 'Inkludert',
          beskrivelse: 'Kostnader ved forsinkelse (reise, overnatting osv.)'
        },
        tapteFeriedager: {
          belop: 'Inkludert',
          beskrivelse: 'Kompensasjon for tapte feriedager'
        },
        smartDelay: {
          belop: 'Inkludert',
          beskrivelse: 'Flyforsinkelse med SmartDelay+ (lounge, kompensasjon osv.)'
        },
        uhellsskader: {
          belop: 'Inkludert',
          egenandel: 3000,
          beskrivelse: 'Uhellsskader på eiendeler'
        },
        egenandelsdekning: {
          belop: 'Inkludert',
          beskrivelse: 'Egenandelsdekning ved skade på leid bil, MC, sykkel eller el-sykkel'
        },
        taptHotell: {
          belop: 'Inkludert',
          beskrivelse: 'Kompensasjon for tapt hotell, arrangement eller leie ved forsinkelse'
        },
        avlystArrangement: {
          belop: 'Inkludert',
          beskrivelse: 'Avbestilling ved avlyst offentlig arrangement'
        },
        skadedyr: {
          belop: 'Inkludert',
          egenandel: 2000,
          beskrivelse: 'Bekjempelse av skadedyr etter utenlandsreise'
        },
        supergaranti: {
          belop: 'Inkludert',
          beskrivelse: 'Supergaranti ved flytting av reiseforsikringen til If'
        }
      },

      vilkar: {
        geografiskOmrade: ['Norge', 'Europa', 'Verden'],
        familiedekning: true,
        familiealternativer: ['Meg selv', 'Meg selv og min familie'],
        maksReisevarighet: 45,
        alternativeReisevarigheter: [45, 90, 180],
        dekkerVinteridretter: false,
        maksAlder: 100,
        egenandel: 3000,
        ikkeDekket: [
          'Reiser som allerede er startet når du kjøper forsikringen',
          'Personer uten norsk folketrygd',
          'Avbestilling/jobbreiser/streik/konkurs',
          'Forverring av kjente sykdommer før reisen',
          'Ekspedisjoner uten tillegg'
        ],
        begrensninger: [
          'Gjelder ikke hjemme, på jobb eller skole',
          'Ikke gyldig i områder Utenriksdepartementet fraråder',
          'Ansvar/rettshjelp kun utenfor Norden (ved verdensdekning)'
        ]
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reise/reiseforsikring/kjop',
        dokument: 'https://if.no/apps/vilkarsbasendokument/IPID?ipid=Hel%C3%A5rs_reiseforsikring',
        sistOppdatert: '2025-11-05',
        kilde: 'If Skadeforsikring NUF'
      },

      popularitet: 78,
      anbefalt: false
    },
    {
      id: 'if-reise-basis-enkelt',
      selskapId: 'if',
      produktnavn: 'Helårs reiseforsikring Basis (kun meg selv)',
      beskrivelse: 'Grunnleggende beskyttelse for reiser i Norge og utlandet',

      pris: {
        maned: 102,
        ar: 1224,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 'Inkludert',
          beskrivelse: 'Utgifter ved sykdom og ulykke'
        },
        evakuering: {
          belop: 'Inkludert',
          beskrivelse: 'Evakuering ved nødssituasjon'
        },
        digitalLegetime: {
          belop: 'Inkludert',
          beskrivelse: 'Digital legetime ved behov'
        },
        psykologiskForstehjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Psykologisk førstehjelp ved alvorlig hendelse'
        },
        idTyveri: {
          belop: 'Inkludert',
          beskrivelse: 'Beskyttelse mot ID-tyveri'
        },
        rettshjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Rettshjelp og ansvar utenfor Norden'
        },
        ekstremsport: {
          belop: 'Inkludert',
          beskrivelse: 'Dekning ved ekstremsport'
        }
      },

      vilkar: {
        geografiskOmrade: ['Norge', 'Europa', 'Verden'],
        familiedekning: false,
        familiealternativer: ['Meg selv'],
        maksReisevarighet: 45,
        alternativeReisevarigheter: [45, 90, 180],
        dekkerVinteridretter: false,
        maksAlder: 100,
        egenandel: 0
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reise/reiseforsikring/kjop',
        dokument: 'https://if.no/apps/vilkarsbasendokument/IPID?ipid=Hel%C3%A5rs_reiseforsikring',
        sistOppdatert: '2025-11-05',
        kilde: 'If Skadeforsikring NUF'
      },

      popularitet: 80,
      anbefalt: false
    },
    {
      id: 'if-reise-standard-enkelt',
      selskapId: 'if',
      produktnavn: 'Helårs reiseforsikring Standard (kun meg selv)',
      beskrivelse: 'Fullverdig dekning for de fleste - inkluderer alt i Basis pluss avbestilling, bagasje og forsinkelse',

      pris: {
        maned: 123,
        ar: 1476,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 'Inkludert',
          beskrivelse: 'Utgifter ved sykdom og ulykke'
        },
        evakuering: {
          belop: 'Inkludert',
          beskrivelse: 'Evakuering ved nødssituasjon'
        },
        digitalLegetime: {
          belop: 'Inkludert',
          beskrivelse: 'Digital legetime ved behov'
        },
        psykologiskForstehjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Psykologisk førstehjelp ved alvorlig hendelse'
        },
        idTyveri: {
          belop: 'Inkludert',
          beskrivelse: 'Beskyttelse mot ID-tyveri'
        },
        rettshjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Rettshjelp og ansvar utenfor Norden'
        },
        ekstremsport: {
          belop: 'Inkludert',
          beskrivelse: 'Dekning ved ekstremsport'
        },
        avbestilling: {
          belop: 'Inkludert',
          beskrivelse: 'Avbestilling av reise'
        },
        bagasje: {
          belop: 'Inkludert',
          beskrivelse: 'Tyveri eller forsinkelse av bagasje'
        },
        tapteFeriedager: {
          belop: 'Inkludert',
          beskrivelse: 'Kompensasjon for tapt ferie'
        }
      },

      vilkar: {
        geografiskOmrade: ['Norge', 'Europa', 'Verden'],
        familiedekning: false,
        familiealternativer: ['Meg selv'],
        maksReisevarighet: 45,
        alternativeReisevarigheter: [45, 90, 180],
        dekkerVinteridretter: false,
        maksAlder: 100,
        egenandel: 0
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reise/reiseforsikring/kjop',
        dokument: 'https://if.no/apps/vilkarsbasendokument/IPID?ipid=Hel%C3%A5rs_reiseforsikring',
        sistOppdatert: '2025-11-05',
        kilde: 'If Skadeforsikring NUF'
      },

      popularitet: 88,
      anbefalt: true
    },
    {
      id: 'if-reise-super-enkelt',
      selskapId: 'if',
      produktnavn: 'Helårs reiseforsikring Super (kun meg selv)',
      beskrivelse: 'Maksimal dekning - inkluderer alt i Standard pluss SmartDelay+, uhellsforsikring og leiebilforsikring',

      pris: {
        maned: 195,
        ar: 2340,
        valuta: 'NOK'
      },

      dekninger: {
        medisinsk: {
          belop: 'Inkludert',
          beskrivelse: 'Utgifter ved sykdom og ulykke'
        },
        evakuering: {
          belop: 'Inkludert',
          beskrivelse: 'Evakuering ved nødssituasjon'
        },
        digitalLegetime: {
          belop: 'Inkludert',
          beskrivelse: 'Digital legetime ved behov'
        },
        psykologiskForstehjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Psykologisk førstehjelp ved alvorlig hendelse'
        },
        idTyveri: {
          belop: 'Inkludert',
          beskrivelse: 'Beskyttelse mot ID-tyveri'
        },
        rettshjelp: {
          belop: 'Inkludert',
          beskrivelse: 'Rettshjelp og ansvar utenfor Norden'
        },
        ekstremsport: {
          belop: 'Inkludert',
          beskrivelse: 'Dekning ved ekstremsport'
        },
        avbestilling: {
          belop: 'Inkludert',
          beskrivelse: 'Avbestilling av reise'
        },
        bagasje: {
          belop: 'Inkludert',
          beskrivelse: 'Tyveri eller forsinkelse av bagasje'
        },
        tapteFeriedager: {
          belop: 'Inkludert',
          beskrivelse: 'Kompensasjon for tapt ferie'
        },
        smartDelay: {
          belop: 'Inkludert',
          beskrivelse: 'Flyforsinkelse med SmartDelay+'
        },
        uhellsforsikring: {
          belop: 'Inkludert',
          egenandel: 3000,
          beskrivelse: 'Uhellsforsikring på eiendeler'
        },
        leiebilforsikring: {
          belop: 'Inkludert',
          beskrivelse: 'Leiebilforsikring'
        }
      },

      vilkar: {
        geografiskOmrade: ['Norge', 'Europa', 'Verden'],
        familiedekning: false,
        familiealternativer: ['Meg selv'],
        maksReisevarighet: 45,
        alternativeReisevarigheter: [45, 90, 180],
        dekkerVinteridretter: false,
        maksAlder: 100,
        egenandel: 3000
      },

      metadata: {
        lenke: 'https://www.if.no/privat/forsikring/reise/reiseforsikring/kjop',
        dokument: 'https://if.no/apps/vilkarsbasendokument/IPID?ipid=Hel%C3%A5rs_reiseforsikring',
        sistOppdatert: '2025-11-05',
        kilde: 'If Skadeforsikring NUF'
      },

      popularitet: 75,
      anbefalt: false
    }
  ],
  bilforsikring: [],
  innboforsikring: [],
  husforsikring: [],
  ulykkeforsikring: [],
  dyreforsikring: [],
  livsforsikring: []
};
