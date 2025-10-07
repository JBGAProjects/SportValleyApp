import { StyleSheet } from "react-native";

/**
 * Estilos de LoginScreen
 * ----------------------
 * - Modernos y neutros, adaptados a móvil
 * - Espaciado consistente
 * - Colores legibles y agradables a la vista
 * - Preparado para ScrollView y teclado en móviles
 */
export const styles = StyleSheet.create({
  // Contenedor principal del ScrollView
  container: {
    flexGrow: 1, // Permite que el ScrollView ocupe toda la pantalla
    justifyContent: "center", // Centra verticalmente el contenido
    alignItems: "center", // Centra horizontalmente
    paddingHorizontal: 20, // Espacio a los lados
    paddingTop: 60, // Espacio superior
    paddingBottom: 40, // Espacio inferior
    backgroundColor: "#ffffff", // Fondo blanco limpio
  },

  // Logo de la app
  logo: {
    width: 120, // Ancho del logo
    height: 120, // Alto del logo
    marginBottom: 20, // Separación del título
  },

  // Título principal
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111", // Texto oscuro para contraste
    marginBottom: 30, // Separación del formulario
    textAlign: "center",
  },

  // Contenedor del formulario
  form: {
    width: "100%", // Ocupa todo el ancho del ScrollView
  },

  // Texto "O continúa con"
  orText: {
    marginVertical: 15, // Separación arriba y abajo
    fontSize: 14,
    color: "#555", // Gris neutro
    textAlign: "center",
  },

  // Texto inferior de registro
  registerText: {
    marginTop: 20,
    fontSize: 14,
    color: "#555", // Gris neutro
    textAlign: "center",
  },

  // Parte del texto que actúa como enlace
  registerLink: {
    color: "#007BFF", // Azul moderno y llamativo
    fontWeight: "600",
  },
});
