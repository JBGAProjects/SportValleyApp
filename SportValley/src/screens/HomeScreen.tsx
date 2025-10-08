import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParams';

/**
 * HomeScreen.tsx
 * ----------------
 * Pantalla principal de la app
 * - Se muestra cuando el usuario está autenticado
 * - Por ahora es un mock, con bienvenida y botón de logout
 * - Diseño neutro y moderno
 */

const HomeScreen = () => {
  const { user, logout } = useAuth(); // Obtenemos usuario y función de logout
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Bienvenido {user?.name || 'Usuario'}
      </Text>

      <Text style={styles.infoText}>
        Esta es la pantalla principal de SportValley.
      </Text>

      <PrimaryButton
        label="Cerrar sesión"
          onPress={() => logout(navigation)}// Cierra sesión y vuelve a LoginScreen
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centra verticalmente
    alignItems: 'center',      // Centra horizontalmente
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2', // Fondo neutro y moderno
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
});
