# MuseGrid - Pinterest Inspiration Tool

A personal tool to help find drawing inspiration from Pinterest boards by randomly selecting images instead of manually scrolling through hundreds of pins.

## Features

- **Landing Page**: Explains how the app works
- **Privacy Policy**: Required for Pinterest API approval
- **Coming Soon**: Placeholder for Pinterest integration

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
pinterest-randomizer/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navigation.tsx
│   │   │   ├── LandingPage.tsx
│   │   │   └── PrivacyPolicy.tsx
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
├── server/                 # Node.js backend (future)
├── dist/                   # Built files
└── package.json
```

## Deployment

The app is configured for deployment to Netlify. The `dist` folder contains the built files that can be deployed.

## Next Steps

1. Deploy to Netlify
2. Apply for Pinterest API access
3. Implement Pinterest OAuth flow
4. Add Pinterest integration features

## Privacy

This app respects user privacy and does not store personal information. See the [Privacy Policy](/privacy) for details.
