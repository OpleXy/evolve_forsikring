# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Evolve Forsikring is a modern React application for managing and comparing insurance policies. Users can view all their insurance agreements in one place and add new policies manually.

## Commands

### Development
```bash
npm install          # Install dependencies
npm start           # Start development server (runs on localhost:3000)
npm run build       # Create production build
npm test            # Run tests
```

## Code Architecture

### Directory Structure
```
src/
├── components/     # All JSX components
├── styles/         # All CSS files
├── context/        # React Context for state management
├── api/            # API integration (placeholder for future development)
└── assets/         # Static assets
```

### Key Components

**InsuranceContext** (`src/context/InsuranceContext.js`)
- Central state management for all insurance data
- Provides `insurances` array and `addInsurance()`, `removeInsurance()` functions
- Contains initial dummy data for demonstration
- Wrap components with `<InsuranceProvider>` to access context via `useInsurance()` hook

**App** (`src/App.jsx`)
- Main application component
- Manages tab navigation state
- Wraps entire app with `InsuranceProvider`

**TabNavigation** (`src/components/TabNavigation.jsx`)
- Simple tab switcher between Dashboard and Add Insurance views
- Takes `activeTab` and `onTabChange` props

**Dashboard** (`src/components/Dashboard.jsx`)
- Displays insurance policies in a responsive card grid
- Shows company name, coverage type, price, and payment date
- "Se andre alternativer" button (placeholder for future API integration)

**AddInsuranceForm** (`src/components/AddInsuranceForm.jsx`)
- Form for adding new insurance policies
- Validates input and adds to context state
- Automatically switches to Dashboard after successful submission

### State Management
- Uses React Context API (no external state libraries)
- All insurance data lives in `InsuranceContext`
- Local component state used for form inputs and UI state

### Styling
- Pure CSS (no CSS-in-JS or preprocessors)
- Modern, minimalist design with gradient backgrounds
- Responsive grid layout for insurance cards
- Separate CSS file for each component

## Future Implementations (Placeholders)

The following features have placeholder comments in the code:

1. **API Integrations** (`src/api/`)
   - Insurance company APIs for fetching alternative policies
   - Price comparison services

2. **BankID Authentication**
   - User authentication via BankID
   - Secure access to personal insurance data

3. **"Se andre alternativer" functionality** (`Dashboard.jsx:12`)
   - Currently shows an alert with placeholder message
   - Will integrate with insurance company APIs

## Development Notes

- All text is in Norwegian (nb-NO locale)
- Date formatting uses Norwegian locale
- Price formatting includes thousand separators
- No backend currently - all data stored in React state (lost on refresh)
