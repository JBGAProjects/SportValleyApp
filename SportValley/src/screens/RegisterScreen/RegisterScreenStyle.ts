// src/screens/Register/registerStyles.ts
import { StyleSheet } from "react-native";
import {
  COLORS,
  FONTS,
  SCREEN,
  SPACING,
  RADIUS,
  SHADOWS,
} from "../../styles/theme";

export const registerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SCREEN.width * 0.05,
    paddingTop: SCREEN.isIOS ? SCREEN.height * 0.08 : SCREEN.height * 0.06,
    backgroundColor: COLORS.background,
  },

  logo: {
    width: Math.min(SCREEN.width * 0.6, 280),
    height: Math.min(SCREEN.width * 0.6, 280),
    marginBottom: SPACING.lg,
  },

  title: {
    fontSize: FONTS.xl,
    fontWeight: "700",
    color: COLORS.textPrimary,
    textAlign: "center",
    marginBottom: SPACING.lg,
  },

  form: {
    width: "100%",
    maxWidth: 400,
  },

  // Texto de login/volver atrás
  loginText: {
    marginTop: SPACING.lg,
    fontSize: FONTS.md,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

  loginLink: {
    color: COLORS.secondary, // azul como el "Regístrate"
    fontWeight: "700",
  },

  // Contenedor de opciones tipo selector (sexo / deporte)
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: SPACING.md,
    justifyContent: "space-between",
  },

  optionButton: {
    flex: 1,
    minWidth: 100,
    paddingVertical: SPACING.sm,
    margin: SPACING.xs / 2,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    ...SHADOWS.light,
  },

  optionButtonSelected: {
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.secondary + "20", // azul claro transparente
  },

  optionText: {
    fontSize: FONTS.md,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },

  optionTextSelected: {
    color: COLORS.secondary,
    fontWeight: "700",
  },
});
