# Evolve Forsikring

Et moderne oversiktsprogram for forsikringer bygget med React.

## Beskrivelse

Evolve Forsikring lar brukere få oversikt over alle sine forsikringsavtaler og legge til nye avtaler manuelt. Applikasjonen er bygget som et "proof of concept" med et minimalistisk og moderne brukergrensesnitt.

## Funksjoner

- **Dashboard**: Oversikt over alle forsikringsavtaler med informasjon om selskap, dekningstype, pris og betalingsdato
- **Legg til forsikring**: Enkelt skjema for å legge til nye forsikringsavtaler
- **Moderne UI**: Responsivt design med kortvisning og gradient-bakgrunner

## Kom i gang

### Forutsetninger
- Node.js (v14 eller nyere)
- npm eller yarn

### Installasjon

1. Klon repositoryet:
```bash
git clone <repository-url>
cd evolve_forsikring
```

2. Installer avhengigheter:
```bash
npm install
```

3. Start utviklingsserveren:
```bash
npm start
```

Applikasjonen åpnes automatisk i nettleseren på `http://localhost:3000`

## Prosjektstruktur

```
src/
├── components/          # React-komponenter
│   ├── Dashboard.jsx
│   ├── AddInsuranceForm.jsx
│   └── TabNavigation.jsx
├── context/            # React Context for state management
│   └── InsuranceContext.js
├── styles/             # CSS-filer
│   ├── App.css
│   ├── Dashboard.css
│   ├── AddInsuranceForm.css
│   └── TabNavigation.css
├── api/                # Placeholder for API-integrasjoner
└── assets/             # Statiske filer
```

## Fremtidig utvikling

Følgende funksjoner er planlagt for fremtidig implementering:

- **API-integrasjoner**: Hente informasjon fra forsikringsselskapenes API-er
- **BankID-autentisering**: Sikker pålogging med BankID
- **Sammenligning**: "Se andre alternativer"-funksjonalitet for å sammenligne priser
- **Database**: Backend med persistent lagring av data

## Teknologi

- React 18
- React Context API for state management
- Pure CSS (ingen eksternt styling-bibliotek)
- Create React App

## Lisens

Dette er et privat prosjekt.
