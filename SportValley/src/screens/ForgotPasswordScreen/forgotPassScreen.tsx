import React, { useState } from "react";
import { ScrollView, View, Text, Platform, Dimensions } from "react-native";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { COLORS, FONTS, SPACING } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParams";
import { forgotPasswordStyles } from "./forgotPassStyle";

const { width } = Dimensions.get("window");
const isSmallScreen = width < 400;

/**
 * ForgotPasswordScreen
 *
 * Pantalla de recuperación de contraseña.
 * Permite al usuario ingresar su correo y recibir un enlace de restablecimiento.
 *
 * Responsive: se adapta a móvil (iOS/Android) y web.
 */
export const ForgotPasswordScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /**
   * handleSubmit
   * - Valida email básico
   * - Simula envío de enlace de recuperación
   */
  const handleSubmit = async () => {
    if (!email.includes("@")) {
      setError("Correo inválido");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Simulación de llamada a API
      await new Promise((res) => setTimeout(res, 1500));
      setSuccess(true);
    } catch (err) {
      setError("Error al enviar el enlace");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={forgotPasswordStyles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Título */}
      <Text style={forgotPasswordStyles.title}>Recuperar contraseña</Text>

      {/* Descripción */}
      <Text style={forgotPasswordStyles.description}>
        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer
        tu contraseña.
      </Text>

      {/* Input del correo */}
      <View style={forgotPasswordStyles.inputWrapper}>
        <InputField
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          error={error}
          keyboardType="email-address"
          inputStyle={{ fontSize: FONTS.md }}
        />
      </View>

      {/* Mensaje de éxito */}
      {success && (
        <Text style={forgotPasswordStyles.successText}>
          ¡Enlace enviado! Revisa tu correo.
        </Text>
      )}

      {/* Botón de envío */}
      <PrimaryButton
        label={loading ? "Enviando..." : "Enviar enlace"}
        onPress={handleSubmit}
        disabled={loading}
        style={{
          width: isSmallScreen ? "100%" : 300,
          maxWidth: 400,
          alignSelf: "center",
          marginTop: SPACING.md,
        }}
      />

      {/* Link para volver al login */}
      <Text
        style={forgotPasswordStyles.backLink}
        onPress={() => navigation.goBack()}
      >
        Volver al inicio de sesión
      </Text>
    </ScrollView>
  );
};
