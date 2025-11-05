// Forsikringstyper og deres metadata
export const productTypes = {
  reiseforsikring: {
    id: 'reiseforsikring',
    navn: 'Reiseforsikring',
    beskrivelse: 'Forsikring for ferie og forretningsreiser',
    icon: '✈️',
    vanligeDekninger: [
      'Reisesyke og ulykke',
      'Avbestilling',
      'Forsinkelse og innstilling',
      'Bagasje og reisegods',
      'Ansvar i utlandet',
      'Hjemtransport'
    ],
    viktigInfo: [
      'Sjekk om du har reiseforsikring gjennom jobben eller kredittkort',
      'Husk å melde fra om eksisterende sykdommer',
      'Vurder om du trenger familiedekning',
      'Se etter dekning av vinteridretter hvis aktuelt'
    ]
  },

  bilforsikring: {
    id: 'bilforsikring',
    navn: 'Bilforsikring',
    beskrivelse: 'Ansvar, delkasko og kasko for bil',
    icon: '🚗',
    vanligeDekninger: [
      'Ansvarsforsikring (lovpålagt)',
      'Delkasko',
      'Kasko',
      'Vegassistanse',
      'Erstatningsbil',
      'Rettshjelp'
    ],
    viktigInfo: [
      'Ansvarsforsikring er lovpålagt',
      'Egenandel varierer mellom 2000-8000 kr',
      'Sjekk om du får bonus ved skadefri kjøring',
      'Vurder behov for kasko basert på bilens verdi'
    ]
  },

  innboforsikring: {
    id: 'innboforsikring',
    navn: 'Innboforsikring',
    beskrivelse: 'Forsikring for bolig og løsøre',
    icon: '🏠',
    vanligeDekninger: [
      'Innbo og løsøre',
      'Ansvar',
      'Reisegods',
      'Bygningskasko (eier)',
      'Elektronikk',
      'Naturskade'
    ],
    viktigInfo: [
      'Vurder om du trenger høyere forsikringssum for verdisaker',
      'Sjekk om du eier eller leier (påvirker dekning)',
      'Husk å oppdatere forsikringssummen ved store kjøp',
      'Fotografer verdisaker for dokumentasjon'
    ]
  },

  husforsikring: {
    id: 'husforsikring',
    navn: 'Husforsikring',
    beskrivelse: 'Forsikring for hus, hytte eller borettslag',
    icon: '🏡',
    vanligeDekninger: [
      'Bygningskasko',
      'Innbo',
      'Ansvar',
      'Naturskade',
      'Rettshjelp',
      'Glassforsikring'
    ],
    viktigInfo: [
      'Forsikringssummen må dekke gjenoppbyggingskost',
      'Eier du hytte? Vurder egen hytteforsikring',
      'Sjekk om du har byggeår før 1950 (kan påvirke pris)',
      'Meld fra om større oppussing/påbygg'
    ]
  },

  ulykkeforsikring: {
    id: 'ulykkeforsikring',
    navn: 'Ulykkeforsikring',
    beskrivelse: 'Sikre deg og familien mot ulykker og skader',
    icon: '🩹',
    vanligeDekninger: [
      'Medisinsk invaliditet',
      'Varig men',
      'Behandlingskostnader',
      'Akutt tannbehandling',
      'Dødsfall',
      'Krisehjelp'
    ],
    viktigInfo: [
      'Viktig tillegg til andre forsikringer',
      'Dekker ulykker både i fritid og jobb',
      'Vurder familiedekning hvis du har barn',
      'Sjekk hva som dekkes gjennom arbeidsgiver'
    ]
  },

  dyreforsikring: {
    id: 'dyreforsikring',
    navn: 'Dyreforsikring',
    beskrivelse: 'Forsikring for hund, katt og andre kjæledyr',
    icon: '🐕',
    vanligeDekninger: [
      'Veterinærbehandling',
      'Operasjoner',
      'Ansvar',
      'Avsavl (for hund)',
      'Dødsfallsdekning',
      'Alternativ behandling'
    ],
    viktigInfo: [
      'Tegn forsikring tidlig (før helseproblemer oppstår)',
      'Egenandel typisk 20% av kostnad',
      'Årlig tak på utbetalinger (vanligvis 20 000-50 000 kr)',
      'Noen raser har høyere premie'
    ]
  },

  livsforsikring: {
    id: 'livsforsikring',
    navn: 'Livsforsikring',
    beskrivelse: 'Sikre familiens økonomi ved dødsfall',
    icon: '❤️',
    vanligeDekninger: [
      'Dødsfall',
      'Kritisk sykdom',
      'Uførhet',
      'Begravelseskostnader',
      'Gjeldsforsikring',
      'Barnedekning'
    ],
    viktigInfo: [
      'Særlig viktig hvis du har forsørgeransvar',
      'Forsikringsbeløpet bør dekke gjeld + levekostnader',
      'Vurder terminpolise vs. spareforsikring',
      'Røyking og helse påvirker prisen'
    ]
  }
};

// Hjelpefunksjoner
export const getProductType = (id) => productTypes[id];

export const getAllProductTypes = () => Object.values(productTypes);

export const getProductTypesByCategory = (category) => {
  // Kategoriser forsikringstyper
  const categories = {
    person: ['reiseforsikring', 'ulykkeforsikring', 'livsforsikring'],
    eiendom: ['innboforsikring', 'husforsikring', 'bilforsikring'],
    dyr: ['dyreforsikring']
  };

  return categories[category]?.map(id => productTypes[id]) || [];
};
