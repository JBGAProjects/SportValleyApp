import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Ancho y alto de pantalla

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05, // 5% del ancho
    paddingTop: Platform.OS === "ios" ? height * 0.08 : height * 0.06, // Ajuste superior según SO
    paddingBottom: height * 0.05,
    backgroundColor: "#ffffff",
  },

  logo: {
    width: Math.min(width * 0.3, 150), // Máximo 150px, 30% del ancho
    height: Math.min(width * 0.3, 150),
    marginBottom: 20,
  },

  title: {
    fontSize: width < 400 ? 22 : 26, // Tamaño adaptativo según ancho pantalla
    fontWeight: "700",
    color: "#111",
    marginBottom: 30,
    textAlign: "center",
  },

  form: {
    width: "100%",
    maxWidth: 400, // Para web, no se estire demasiado
  },

  orText: {
    marginVertical: 15,
    fontSize: width < 400 ? 12 : 14,
    color: "#555",
    textAlign: "center",
  },

  registerText: {
    marginTop: 20,
    fontSize: width < 400 ? 12 : 14,
    color: "#555",
    textAlign: "center",
  },

  registerLink: {
    color: "#007BFF",
    fontWeight: "600",
  },
});
