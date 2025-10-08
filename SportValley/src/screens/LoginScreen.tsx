import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { InputField } from '../components/InputField';
import { PrimaryButton } from '../components/PrimaryButton';
import { SocialButton } from '../components/SocialButton';
import { styles } from './styles/LoginScreenStyle';
import { useLoginScreenLogic } from './LoginScreenLogic';
// Importamos el hook con la lógica

/**
 * 🧭 Pantalla de Login
 * 
 * Esta pantalla permite al usuario iniciar sesión con:
 * - Correo y contraseña (formulario clásico)
 * - Google o Facebook (aún sin lógica)
 * 
 * El diseño es moderno, neutro y preparado para móvil.
 */
export const LoginScreen: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  } = useLoginScreenLogic(); // Conectamos la lógica del login

  // Iconos temporales (Google / Facebook)
  const googleIcon = { uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' };
  const facebookIcon = { uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' };

  // Logo temporal de deportes
  const tempLogo = {
    uri: 'https://cdn-icons-png.flaticon.com/512/9382/9382210.png', // 🏀⚽🎾 Logo genérico de deportes
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🏟️ Logo temporal de la app */}
      <Image
        source={tempLogo}
        style={styles.logo}
        resizeMode="contain" // Mantiene proporción del logo
      />

      {/* 🏁 Título principal */}
      <Text style={styles.title}>Bienvenido a SportValley</Text>

      {/* 🧾 Formulario de login */}
      <View style={styles.form}>
        {/* Inputs controlados por el hook */}
        <InputField
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail} // Actualiza estado email
        />
        <InputField
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword} // Actualiza estado password
        />

        {/* Botón de login */}
        <PrimaryButton
          label={loading ? "Cargando..." : "Iniciar sesión"}
          onPress={handleLogin}  // Llama al login mock
          disabled={loading}     // Evita múltiples clicks mientras carga
        />
      </View>

      {/* 🔗 Separador */}
      <Text style={styles.orText}>O continúa con</Text>

      {/* 🔘 Botones sociales (sin lógica aún) */}
      <SocialButton
        label="Google"
        icon={googleIcon}
        backgroundColor="#DB4437"
        onPress={() => {}}
      />
      <SocialButton
        label="Facebook"
        icon={facebookIcon}
        backgroundColor="#3b5998"
        onPress={() => {}}
      />

      {/* 📩 Enlace de registro */}
      <Text style={styles.registerText}>
        ¿No tienes cuenta?{' '}
        <Text style={styles.registerLink} onPress={() => {}}>
          Regístrate
        </Text>
      </Text>
    </ScrollView>
  );
};
