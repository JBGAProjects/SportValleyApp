import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Ancho y alto de pantalla

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingTop:
      Platform.OS === "ios"
        ? height * 0.08
        : Platform.OS === "web"
          ? height * 0.1
          : height * 0.06, // web más espacio arriba
    paddingBottom: height * 0.05,
    minHeight: height, // evita scroll vertical innecesario
    backgroundColor: "#ffffff",
  },

  logo: {
    width: Math.min(width * 0.8, 300),
    height: Math.min(width * 0.8, 300),
    marginBottom: Platform.OS === "web" ? 40 : 20, // más espacio en web
  },

  form: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center", // centrado horizontal
  },

  orText: {
    marginVertical: 15,
    fontSize: Math.min(width < 400 ? 12 : 14, 16),
    color: "#555",
    textAlign: "center",
  },
  registerText: {
    marginTop: 20,
    fontSize: Math.min(width < 400 ? 12 : 14, 16),
    color: "#555",
    textAlign: "center",
  },

  registerLink: {
    color: "#007BFF",
    fontWeight: "600",
  },
});
