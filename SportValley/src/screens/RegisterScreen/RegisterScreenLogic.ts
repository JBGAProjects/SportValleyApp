import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParams";
import { useAuth } from "../../context/AuthContext";

/**
 * Hook para registro con validación avanzada de contraseña y flujo de dos pasos.
 */
export const useRegisterLogic = () => {
  // Estado de los pasos
  const [currentStep, setCurrentStep] = useState(1);
  const [country, setCountry] = useState("España");

  // Campos del formulario
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+34");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  // Validación de campos
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    confirmPassword: "",
    phoneNumber: "",
    phonePrefix: "",
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

  // Validación en tiempo real de la contraseña
  useEffect(() => {
    setPasswordRules({
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  // Validadores específicos
  const validateStep1 = () => {
    const step1Errors = {
      firstName: firstName ? "" : "El nombre es obligatorio.",
      lastName: lastName ? "" : "Los apellidos son obligatorios.",
      country: country ? "" : "El país es obligatorio.",
      phoneNumber: phoneNumber ? "" : "Número de teléfono requerido.",
      phonePrefix: phonePrefix ? "" : "Prefijo requerido.",
    };
    setErrors((prev) => ({ ...prev, ...step1Errors }));
    return Object.values(step1Errors).every((err) => err === "");
  };

  const validateStep2 = () => {
    const step2Errors = {
      email: email.includes("@") ? "" : "Correo electrónico inválido.",
      confirmPassword:
        password === confirmPassword ? "" : "Las contraseñas no coinciden.",
    };

    setErrors((prev) => ({ ...prev, ...step2Errors }));
    const passwordValid = Object.values(passwordRules).every((rule) => rule);

    return (
      Object.values(step2Errors).every((err) => err === "") && passwordValid
    );
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
      }
    }
  };

  const handleRegister = async () => {
    if (currentStep === 2) {
      if (!validateStep2()) return;

      setLoading(true);
      try {
        console.log(
          "Registrando usuario:",
          firstName,
          lastName,
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
    }
  };

  const handleGoBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else {
      navigation.navigate("Login");
    }
  };

  return {
    currentStep,
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
  };
};
