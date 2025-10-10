import { Platform, StyleSheet } from "react-native";
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
    paddingTop:
      Platform.OS === "ios" ? SCREEN.height * 0.08 : SCREEN.height * 0.06,
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

  loginText: {
    marginTop: SPACING.lg,
    fontSize: FONTS.md,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

  loginLink: {
    color: COLORS.secondary, // azul como "Regístrate"
    fontWeight: "700",
  },

  pickerLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    marginLeft: 5,
  },

  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: RADIUS.md,
    marginBottom: 20,
    backgroundColor: "#fff",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    height: 50,
    justifyContent: "center",
  },

  picker: {
    width: "100%",
    height: 50,
    color: "#000",
  },

  webPicker: {
    width: "100%",
    height: 52, // Igual que InputField
    paddingHorizontal: SPACING.md,
    paddingVertical: 12,
    fontSize: FONTS.md,
    borderRadius: RADIUS.md,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
  },

  errorBorder: {
    borderColor: "#D32F2F",
    borderWidth: 2,
  },

  errorText: {
    color: "#D32F2F",
    fontSize: 12,
    marginTop: -15,
    marginBottom: 20,
    marginLeft: 5,
  },

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
    backgroundColor: COLORS.secondary + "20",
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
