import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Medidas de pantalla para hacer responsive

export const styles = StyleSheet.create({
  // Contenedor principal del ScrollView
  container: {
    flexGrow: 1, // Ocupa todo el espacio disponible
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
    paddingHorizontal: width * 0.05, // 5% de margen lateral
    paddingTop: Platform.OS === "ios" ? height * 0.08 : height * 0.06,
    paddingBottom: height * 0.05,
    minHeight: height, // Evita scroll innecesario en web
    backgroundColor: "#ffffff", // Fondo blanco limpio
  },

  // Logo de la app
  logo: {
    width: Math.min(width * 0.6, 250), // Responsive: máximo 250px
    height: Math.min(height * 0.25, 250),
    marginBottom: Platform.OS === "web" ? 30 : 20,
  },

  // Título principal
  title: {
    fontSize: width < 400 ? 22 : 26,
    fontWeight: "700",
    color: "#111",
    marginBottom: 30,
    textAlign: "center",
  },

  // Contenedor del formulario
  form: {
    width: "100%",
    maxWidth: 400, // Para web: no se estire demasiado
  },

  // Texto que indica link a login
  loginText: {
    marginTop: 20,
    fontSize: width < 400 ? 12 : 14,
    color: "#555",
    textAlign: "center",
  },

  // Enlace de login
  loginLink: {
    color: "#007BFF",
    fontWeight: "600",
  },
  errorText: {
    color: "#D32F2F", // Rojo fuerte para errores
    fontSize: 12,
    marginBottom: 6,
  },
});
