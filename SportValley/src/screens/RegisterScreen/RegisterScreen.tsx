// src/screens/Register/RegisterScreen.tsx
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { registerStyles } from "./RegisterScreenStyle";
import { useRegisterLogic } from "./RegisterScreenLogic";
import { Logos } from "../../utils/constants/images";

// Componente para mostrar reglas de contraseña
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
    firstName,
    setFirstName,
    lastName,
    setLastName,
    country,
    setCountry,
    phonePrefix,
    setPhonePrefix,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordRules,
    favoriteSport,
    setFavoriteSport,
    gender,
    setGender,
    loading,
    handleRegister,
    handleGoBack,
    handleNextStep,
    errors,
  } = useRegisterLogic();

  const deportes = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Voleibol",
    "Ecuavoley",
    "Ping Pong",
  ];

  // --- Paso 1 ---
  const renderStep1 = () => (
    <>
      <Text style={registerStyles.title}>1. Datos Personales</Text>

      <InputField
        placeholder="Nombre"
        value={firstName}
        onChangeText={setFirstName}
        error={errors.firstName}
      />
      <InputField
        placeholder="Apellidos"
        value={lastName}
        onChangeText={setLastName}
        error={errors.lastName}
      />
      <InputField
        placeholder="País de residencia"
        value={country}
        onChangeText={setCountry}
        error={errors.country}
      />

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

  // --- Paso 2 ---
  const renderStep2 = () => (
    <>
      <Text style={registerStyles.title}>2. Cuenta y Seguridad</Text>

      <InputField
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
      />
      <InputField
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

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

      <InputField
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={errors.confirmPassword}
      />

      <PrimaryButton
        label="Siguiente"
        onPress={handleNextStep}
        style={{ marginTop: 20 }}
      />
    </>
  );

  // --- Paso 3 ---
  const renderStep3 = () => (
    <>
      <Text style={registerStyles.title}>3. Preferencias</Text>

      {/* Selector de Sexo */}
      <Text style={registerStyles.pickerLabel}>Sexo:</Text>
      {Platform.OS === "web" ? (
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={registerStyles.webPicker}
        >
          <option value="">Selecciona tu sexo...</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Prefiero no decir</option>
        </select>
      ) : (
        <View style={registerStyles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(val) => setGender(val)}
            mode="dropdown"
            style={registerStyles.picker}
          >
            <Picker.Item label="Selecciona tu sexo..." value="" />
            <Picker.Item label="Masculino" value="male" />
            <Picker.Item label="Femenino" value="female" />
            <Picker.Item label="Prefiero no decir" value="other" />
          </Picker>
        </View>
      )}
      {errors.gender && (
        <Text style={registerStyles.errorText}>{errors.gender}</Text>
      )}

      {/* Selector de Deporte */}
      <Text style={registerStyles.pickerLabel}>Deporte preferido:</Text>
      <View style={registerStyles.optionsContainer}>
        {deportes.map((d) => {
          const selected = favoriteSport === d;
          return (
            <TouchableOpacity
              key={d}
              activeOpacity={0.8}
              onPress={() => setFavoriteSport(d)}
              style={[
                registerStyles.optionButton,
                selected && registerStyles.optionButtonSelected,
              ]}
            >
              <Text
                style={[
                  registerStyles.optionText,
                  selected && registerStyles.optionTextSelected,
                ]}
              >
                {d}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {errors.favoriteSport && (
        <Text style={registerStyles.errorText}>{errors.favoriteSport}</Text>
      )}

      <PrimaryButton
        label={loading ? "Creando cuenta..." : "Crear cuenta"}
        onPress={handleRegister}
        style={{ marginTop: 30 }}
      />
    </>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        contentContainerStyle={registerStyles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={Logos.sportValley}
          style={registerStyles.logo}
          resizeMode="contain"
        />

        <View style={registerStyles.form}>{renderCurrentStep()}</View>

        <Text style={registerStyles.loginText}>
          {currentStep > 1 ? "Volver atrás o " : "¿Ya tienes cuenta? "}
          <Text style={registerStyles.loginLink} onPress={handleGoBack}>
            {currentStep > 1 ? "Editar datos" : "Inicia sesión"}
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
