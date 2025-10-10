// src/screens/Login/loginStyles.ts
import { StyleSheet } from "react-native";
import { COLORS, FONTS, SCREEN, SPACING } from "../../styles/theme";

export const loginStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SCREEN.width * 0.05,
    paddingTop: SCREEN.isIOS ? SCREEN.height * 0.08 : SCREEN.height * 0.06,
    backgroundColor: COLORS.background,
  },

  logo: {
    width: Math.min(SCREEN.width * 0.7, 300),
    height: Math.min(SCREEN.width * 0.7, 300),
    marginBottom: SPACING.lg,
  },

  form: {
    width: "100%",
    maxWidth: 400,
  },

  orText: {
    marginVertical: SPACING.md,
    fontSize: FONTS.md,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

  registerText: {
    marginTop: SPACING.md,
    fontSize: FONTS.md,
    color: COLORS.textSecondary,
    textAlign: "center",
  },

  registerLink: {
    color: COLORS.secondary,
    fontWeight: "700",
  },
});
