import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { InputField } from "../../components/InputField";
import { PrimaryButton } from "../../components/PrimaryButton";
import { styles } from "./RegisterScreenStyle";
import { useRegisterLogic } from "./RegisterScreenLogic";

export const RegisterScreen: React.FC = () => {
  const {
    fullName,
    setFullName,
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
    errors,
  } = useRegisterLogic();

  const logo = {
    uri: "https://cdn-icons-png.flaticon.com/512/9382/9382210.png",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Crea tu cuenta en SportValley</Text>

      <View style={styles.form}>
        {/* Nombre completo */}
        <InputField
          placeholder="Nombre completo"
          value={fullName}
          onChangeText={setFullName}
        />
        {errors.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}

        {/* Email */}
        <InputField
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

        {/* Contraseña */}
        <InputField
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ marginBottom: 8 }}>
          <Text style={{ color: passwordRules.minLength ? "green" : "red" }}>
            {passwordRules.minLength ? "✅" : "❌"} Mínimo 8 caracteres
          </Text>
          <Text style={{ color: passwordRules.uppercase ? "green" : "red" }}>
            {passwordRules.uppercase ? "✅" : "❌"} Al menos una mayúscula
          </Text>
          <Text style={{ color: passwordRules.lowercase ? "green" : "red" }}>
            {passwordRules.lowercase ? "✅" : "❌"} Al menos una minúscula
          </Text>
          <Text style={{ color: passwordRules.number ? "green" : "red" }}>
            {passwordRules.number ? "✅" : "❌"} Al menos un número
          </Text>
          <Text style={{ color: passwordRules.specialChar ? "green" : "red" }}>
            {passwordRules.specialChar ? "✅" : "❌"} Al menos un símbolo
          </Text>
        </View>

        {/* Confirmar contraseña */}
        <InputField
          placeholder="Confirmar contraseña"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

        {/* Prefijo + Teléfono */}
        <View style={{ flexDirection: "row", gap: 8 }}>
          <InputField
            placeholder="+34"
            value={phonePrefix}
            onChangeText={setPhonePrefix}
            style={{ flex: 1 }}
          />
          <InputField
            placeholder="Número de teléfono"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={{ flex: 3 }}
          />
        </View>
        {errors.phoneNumber ? <Text style={styles.errorText}>{errors.phoneNumber}</Text> : null}

        <PrimaryButton
          label={loading ? "Registrando..." : "Registrarse"}
          onPress={handleRegister}
        />
      </View>

      <Text style={styles.loginText}>
        ¿Ya tienes cuenta?{" "}
        <Text style={styles.loginLink} onPress={handleGoBack}>
          Inicia sesión
        </Text>
      </Text>
    </ScrollView>
  );
};
