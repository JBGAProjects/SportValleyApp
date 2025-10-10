// Importamos el hook con la lógica
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SocialButton } from "../../components/SocialButton";
import { loginStyles } from "./LoginScreenStyle";
import { useLoginScreenLogic } from "./LoginScreenLogic";
import { Logos } from "../../utils/constants/images";

/**
 * Pantalla de Login
 *
 * Esta pantalla permite al usuario iniciar sesión con:
 * - Correo y contraseña (formulario clásico)
 * - Google o Facebook (aún sin lógica)
 *
 */
export const LoginScreen: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
    handleRegister,
  } = useLoginScreenLogic(); // Conectamos la lógica del login

  // Iconos temporales (Google / Facebook)
  const googleIcon = {
    uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  };
  const facebookIcon = {
    uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
  };

  // Logo temporal de deportes
  const tempLogo = require("../../../assets/logoApp.png");

  return (
    <ScrollView contentContainerStyle={loginStyles.container}>
      {/* Logo temporal de la app */}
      <Image
        source={Logos.sportValley}
        style={loginStyles.logo}
        resizeMode="contain" // Mantiene proporción del logo
      />

      {/* Formulario de login */}
      <View style={loginStyles.form}>
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
          onPress={handleLogin} // Llama al login mock
          disabled={loading} // Evita múltiples clicks mientras carga
        />
      </View>

      {/* Separador */}
      <Text style={loginStyles.orText}>O continúa con</Text>

      {/* Botones sociales (sin lógica aún) */}
      <SocialButton
        label="Google"
        icon={googleIcon}
        backgroundColor="#EA6055"
        onPress={() => {}}
      />
      <SocialButton
        label="Facebook"
        icon={facebookIcon}
        backgroundColor="#4E7FFF"
        onPress={() => {}}
      />

      {/* Enlace de registro */}
      <Text style={loginStyles.registerText}>
        ¿No tienes cuenta?{" "}
        <Text style={loginStyles.registerLink} onPress={handleRegister}>
          Regístrate
        </Text>
      </Text>
    </ScrollView>
  );
};
