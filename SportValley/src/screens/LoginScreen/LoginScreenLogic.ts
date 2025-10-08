import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootStackParams";
import { useAuth } from "../../context/AuthContext";

export const useLoginScreenLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { login } = useAuth(); // usamos la función login del contexto

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(email, password); // login actualiza isAuthenticated automáticamente

      // Reemplazamos Login por Home en la pila
      navigation.replace("Home");
    } catch (error) {
      console.error("Error login:", error);
      // El alert ya lo maneja el contexto
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
};
