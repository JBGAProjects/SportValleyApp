import 'dotenv/config'; // Permite usar variables de entorno definidas en un archivo .env

export default {
  expo: {
    name: "SportValley",          // Nombre de tu app
    slug: "sportvalley",          // Slug usado en Expo y EAS
    version: "1.0.0",             // Versión inicial
    orientation: "portrait",      // Orientación de la app
    icon: "./assets/icon.png",    // Icono de la app
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      apiBase: process.env.API_BASE || "http://localhost:3001" 
      /**
       * Esta es la URL base de tu backend.
       * Si existe la variable de entorno API_BASE se usará esa, 
       * de lo contrario se toma el localhost para desarrollo.
       */
    }
  }
};
