# SportValley App

## Overview
SportValley is a React Native mobile application built with Expo. This project was imported from GitHub and configured to run in the Replit environment.

## Project Structure
- **SportValley/** - Main application directory containing the Expo React Native app
  - `App.tsx` - Main app entry point
  - `index.ts` - Index file
  - `app.config.js` - Expo configuration
  - `src/` - Source code directory
    - `screens/` - Application screens (LoginScreen, HomeScreen)
    - `components/` - Reusable components
    - `navigation/` - Navigation setup
    - `api/` - API client
    - `context/` - React context providers (AuthContext)
    - `services/` - Service utilities (secureStore)

## Technology Stack
- **Framework**: Expo ~54.0.12
- **React**: 19.1.0
- **React Native**: 0.81.4
- **Navigation**: React Navigation 7.x
- **Backend Communication**: Axios
- **Runtime**: Node.js 20.19.3

## Development Setup
1. **Dependencies**: All Node.js dependencies are already installed in `SportValley/node_modules`
2. **Environment**: Uses `.env` file in SportValley directory for configuration
3. **Backend API**: Configured in `app.config.js` with `API_BASE` environment variable (defaults to http://localhost:3001)

## Running the App
The Expo development server runs with tunnel mode for easy mobile device testing:
```bash
cd SportValley && npx expo start --tunnel
```

The workflow is configured to run automatically in Replit. The tunnel creates a public URL that can be accessed via:
- Expo Go app on mobile (scan QR code)
- Web browser (localhost:8081)

## Recent Changes (October 8, 2025)
- Imported project from GitHub (JBGAProjects/SportValleyApp)
- Installed Node.js v20.19.3 toolchain
- Added missing `dotenv` dependency
- Configured Expo workflow with tunnel mode
- Created root `.gitignore` for Node.js environment
- Set up project documentation

## Notes
- The app uses Expo's tunnel feature for easy mobile device testing
- Some React Native packages show engine warnings for Node 20.19.4+ but work fine with 20.19.3
- Mock server configuration available in `mock-server.js`
