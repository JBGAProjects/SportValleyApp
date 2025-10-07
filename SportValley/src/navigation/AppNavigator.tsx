import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import { LoginScreen } from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

/**
 * AppNavigator.tsx
 *
 * Controla la navegación de la app usando React Navigation.
 * - Si el usuario está autenticado, muestra la pantalla principal (HomeScreen)
 * - Si no está autenticado, muestra LoginScreen
 *
 * Esto permite tener un flujo de login limpio y condicional sin lógica extra en cada pantalla.
 */

/** Stack Navigator de React Navigation */
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  /** Consumimos el estado global de autenticación */
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          /**
           * Si el usuario está autenticado:
           * - Navega automáticamente a HomeScreen
           */
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          /**
           * Si NO está autenticado:
           * - Muestra LoginScreen
           */
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
        {/* Aquí se pueden agregar más pantallas como Register, Profile, Feed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
