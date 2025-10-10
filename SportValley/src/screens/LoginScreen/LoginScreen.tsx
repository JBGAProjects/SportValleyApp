// LoginScreen.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SocialButton } from "../../components/SocialButton";
import { loginStyles } from "./LoginScreenStyle";
import { useLoginScreenLogic } from "./LoginScreenLogic";
import { Logos } from "../../utils/constants/images";
import { useNavigation } from "@react-navigation/native";

/**
 * Pantalla de Login
 *
 * Permite al usuario iniciar sesión con:
 * - Correo y contraseña
 * - Google o Facebook
 * - O recuperar contraseña
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
    handleForgotPassword,
  } = useLoginScreenLogic();

  const navigation = useNavigation();

  // Iconos temporales
  const googleIcon = {
    uri: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
  };
  const facebookIcon = {
    uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={loginStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <Image
          source={Logos.sportValley}
          style={loginStyles.logo}
          resizeMode="contain"
        />

        {/* Formulario */}
        <View style={loginStyles.form}>
          <InputField
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <InputField
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Link de recuperar contraseña */}
          <Text
            style={loginStyles.forgotPassword}
            onPress={handleForgotPassword}
          >
            ¿Has olvidado la contraseña?
          </Text>

          {/* Botón de login */}
          <PrimaryButton
            label={loading ? "Cargando..." : "Iniciar sesión"}
            onPress={handleLogin}
            disabled={loading}
          />
        </View>

        {/* Separador */}
        <Text style={loginStyles.orText}>O continúa con</Text>

        {/* Botones sociales */}
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
    </KeyboardAvoidingView>
  );
};
