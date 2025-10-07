// loginScreenLogic.ts
import { useState } from "react";
import { api } from "../api/apiClient";
import { saveToken } from "../services/secureStore";

/**
 * Hook que maneja la lógica de login
 */
export const useLoginScreenLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Llamada al mock-server o backend
      const response = await api.post("/login", { email, password });
      const token = response.data.accessToken;

      // Guardamos token de manera segura
      await saveToken("accessToken", token);

      console.log("Login exitoso (mock)", response.data);
      // Aquí podrías actualizar contexto o navegar
    } catch (error) {
      console.error("Error login:", error);
      alert("Credenciales inválidas");
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
