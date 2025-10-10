import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParams";
import { useAuth } from "../../context/AuthContext";

export const useRegisterLogic = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Paso 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("España");
  const [phonePrefix, setPhonePrefix] = useState("+34");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Paso 2
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordRules, setPasswordRules] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  // Paso 3
  const [favoriteSport, setFavoriteSport] = useState("");
  const [gender, setGender] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { login } = useAuth();

  // Validación de contraseña en tiempo real
  useEffect(() => {
    setPasswordRules({
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const validateStep1 = () => {
    const stepErrors = {
      firstName: firstName ? "" : "Nombre obligatorio",
      lastName: lastName ? "" : "Apellido obligatorio",
      country: country ? "" : "País obligatorio",
      phonePrefix: phonePrefix ? "" : "Prefijo obligatorio",
      phoneNumber: phoneNumber ? "" : "Número obligatorio",
    };
    setErrors((prev: any) => ({ ...prev, ...stepErrors }));
    return Object.values(stepErrors).every((e) => e === "");
  };

  const validateStep2 = () => {
    const stepErrors = {
      email: email.includes("@") ? "" : "Correo inválido",
      confirmPassword:
        password === confirmPassword ? "" : "Contraseñas no coinciden",
    };
    setErrors((prev: any) => ({ ...prev, ...stepErrors }));
    const passwordValid = Object.values(passwordRules).every((v) => v);
    return Object.values(stepErrors).every((e) => e === "") && passwordValid;
  };

  const validateStep3 = () => {
    const stepErrors = {
      favoriteSport: favoriteSport ? "" : "Selecciona un deporte",
      gender: gender ? "" : "Selecciona un sexo",
    };
    setErrors((prev: any) => ({ ...prev, ...stepErrors }));
    return Object.values(stepErrors).every((e) => e === "");
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) setCurrentStep(2);
    if (currentStep === 2 && validateStep2()) setCurrentStep(3);
  };

  const handleRegister = async () => {
    if (!validateStep3()) return;
    setLoading(true);
    try {
      console.log("Registrando usuario:", {
        firstName,
        lastName,
        email,
        phonePrefix,
        phoneNumber,
        favoriteSport,
        gender,
      });
      await login(email, password);
      navigation.replace("Home");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    if (currentStep === 3) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(1);
    else navigation.navigate("Login");
  };

  return {
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
    errors,
    handleNextStep,
    handleRegister,
    handleGoBack,
  };
};
