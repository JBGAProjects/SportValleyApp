import { useState } from "react";

/**
 * useForgotPasswordLogic
 *
 * Hook para manejar la lógica del formulario de recuperación de contraseña.
 * - Maneja el estado del correo electrónico.
 * - Controla loading y mensajes de éxito o error.
 */
export const useForgotPasswordLogic = () => {
  const [email, setEmail] = useState(""); // email del usuario
  const [loading, setLoading] = useState(false); // estado de envío
  const [success, setSuccess] = useState(false); // indica si el correo fue enviado
  const [error, setError] = useState(""); // mensaje de error

  /**
   * handleSubmit
   * ----------------------
   * Valida el email y simula el envío del enlace de recuperación.
   */
  const handleSubmit = async () => {
    setError("");
    setSuccess(false);

    // Validación básica de email
    if (!email.includes("@")) {
      setError("Correo electrónico inválido.");
      return;
    }

    setLoading(true);
    try {
      // Simulamos petición a backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true); // simulamos éxito
    } catch (err) {
      setError("Ha ocurrido un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    loading,
    success,
    error,
    handleSubmit,
  };
};
