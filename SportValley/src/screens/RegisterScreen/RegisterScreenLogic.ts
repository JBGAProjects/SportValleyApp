import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContext";
import { RootStackParamList } from "../../navigation/RootStackParams";

/**
 * 🎯 Hook para registro con validación avanzada de contraseña
 */
export const useRegisterLogic = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+34");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  // Validación de campos
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  // Validaciones avanzadas de contraseña
  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { login } = useAuth();

  // 🔴 Validación en tiempo real de la contraseña
  useEffect(() => {
    setPasswordRules({
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  // Validación general de campos al enviar
  const validateFields = () => {
    const newErrors = {
      fullName: fullName ? "" : "El nombre es obligatorio.",
      email: email.includes("@") ? "" : "Correo electrónico inválido.",
      confirmPassword:
        password === confirmPassword ? "" : "Las contraseñas no coinciden.",
      phoneNumber: phoneNumber ? "" : "Número de teléfono requerido.",
    };

    setErrors(newErrors);

    // Validación de contraseña: todas las reglas deben cumplirse
    const passwordValid = Object.values(passwordRules).every((rule) => rule);
    return Object.values(newErrors).every((err) => err === "") && passwordValid;
  };

  const handleRegister = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      console.log(
        "Registrando usuario:",
        fullName,
        email,
        phonePrefix + phoneNumber
      );

      await login(email, password);
      navigation.replace("Home");
    } catch (error) {
      console.error("Error en registro:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => navigation.navigate("Login");

  return {
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
    passwordRules, // ✅ Reglas individuales
    loading,
    handleRegister,
    handleGoBack,
    errors,
  };
};
