import React from "react";
import { ScrollView, View, Text, Image, Platform } from "react-native";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { registerStyles } from "./RegisterScreenStyle";
import { useRegisterLogic } from "./RegisterScreenLogic";
import { Logos } from "../../utils/constants/images";

// Componente para mostrar las reglas de contraseña de forma limpia
const PasswordRule = ({
  isValid,
  text,
}: {
  isValid: boolean;
  text: string;
}) => (
  <Text
    style={{
      fontSize: 14,
      color: isValid ? "#28A745" : "#D32F2F",
      marginBottom: 4,
    }}
  >
    {isValid ? "✅" : "❌"} {text}
  </Text>
);

export const RegisterScreen: React.FC = () => {
  const {
    currentStep,
    // CAMBIO: firstName y lastName en lugar de fullName
    firstName,
    setFirstName,
    lastName,
    setLastName,
    country,
    setCountry,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    phonePrefix,
    setPhonePrefix,
    phoneNumber,
    setPhoneNumber,
    passwordRules,
    loading,
    handleRegister,
    handleGoBack,
    handleNextStep,
    errors,
  } = useRegisterLogic();

  // ----------------------------------------------------
  // Renderizado del Paso 1: Datos Personales
  // ----------------------------------------------------
  const renderStep1 = () => (
    <>
      <Text style={registerStyles.title}>1. Datos Personales</Text>

      {/* Nombre (Nuevo campo) */}
      <InputField
        placeholder="Nombre"
        value={firstName}
        onChangeText={setFirstName}
        error={errors.firstName}
      />
      {/* Apellidos (Nuevo campo) */}
      <InputField
        placeholder="Apellidos"
        value={lastName}
        onChangeText={setLastName}
        error={errors.lastName}
      />

      {/* País de residencia */}
      <InputField
        placeholder="País de residencia"
        value={country}
        onChangeText={setCountry}
        error={errors.country}
      />

      {/* Prefijo + Teléfono */}
      <View
        style={{
          flexDirection: "row",
          marginRight: 8,
          marginBottom: errors.phoneNumber ? 0 : 20,
        }}
      >
        <InputField
          placeholder="+34"
          value={phonePrefix}
          onChangeText={setPhonePrefix}
          keyboardType="phone-pad"
          style={{ flex: 1 }}
          error={errors.phonePrefix}
        />
        <InputField
          placeholder="Número de teléfono"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={{ flex: 3 }}
          error={errors.phoneNumber}
        />
      </View>

      <PrimaryButton
        label="Siguiente"
        onPress={handleNextStep}
        style={{ marginTop: 20 }}
      />
    </>
  );

  // ----------------------------------------------------
  // Renderizado del Paso 2: Cuenta y Seguridad (sin cambios)
  // ----------------------------------------------------
  const renderStep2 = () => (
    <>
      <Text style={registerStyles.title}>2. Cuenta y Seguridad</Text>

      {/* Email */}
      <InputField
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
      />

      {/* Contraseña */}
      <InputField
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Reglas de Contraseña */}
      <View style={{ marginBottom: 20 }}>
        <PasswordRule
          isValid={passwordRules.minLength}
          text="Mínimo 8 caracteres"
        />
        <PasswordRule
          isValid={passwordRules.uppercase}
          text="Al menos una mayúscula"
        />
        <PasswordRule
          isValid={passwordRules.lowercase}
          text="Al menos una minúscula"
        />
        <PasswordRule
          isValid={passwordRules.number}
          text="Al menos un número"
        />
        <PasswordRule
          isValid={passwordRules.specialChar}
          text="Al menos un símbolo"
        />
      </View>

      {/* Confirmar contraseña */}
      <InputField
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={errors.confirmPassword}
      />

      <PrimaryButton
        label={loading ? "Registrando..." : "Registrarse"}
        onPress={handleRegister}
        style={{ marginTop: 20 }}
      />
    </>
  );

  // ----------------------------------------------------
  // Renderizado principal (sin cambios)
  // ----------------------------------------------------
  return (
    <ScrollView contentContainerStyle={registerStyles.container}>
      <Image
        source={Logos.sportValley}
        style={registerStyles.logo}
        resizeMode="contain"
      />

      <View style={registerStyles.form}>
        {currentStep === 1 ? renderStep1() : renderStep2()}
      </View>

      <Text style={registerStyles.loginText}>
        {currentStep === 2 ? "Volver atrás o " : "¿Ya tienes cuenta? "}
        <Text style={registerStyles.loginLink} onPress={handleGoBack}>
          {currentStep === 2 ? "Editar datos" : "Inicia sesión"}
        </Text>
      </Text>
    </ScrollView>
  );
};
