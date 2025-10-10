import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import { LogBox } from "react-native";

/**
 * App.tsx
 *
 * Archivo raíz de la app.
 * - Envuelve la aplicación con AuthProvider para estado global de autenticación.
 * - Contiene AppNavigator para controlar flujo de pantallas según login.
 * - Preparado para trabajar con mock server o backend real.
 */

// Ignorar advertencias irrelevantes de Expo durante desarrollo
LogBox.ignoreLogs(["Setting a timer", "Remote debugger"]);

/**
 * Componente principal de la app
 */
export default function App() {
  return (
    /**
     * AuthProvider:
     * - Proporciona contexto global de login a toda la app
     */
    <AuthProvider>
      {/**
       * AppNavigator:
       * - Decide qué pantalla mostrar según estado de login
       * - Puede incluir LoginScreen, HomeScreen, RegisterScreen, etc.
       */}
      <AppNavigator />
    </AuthProvider>
  );
}
