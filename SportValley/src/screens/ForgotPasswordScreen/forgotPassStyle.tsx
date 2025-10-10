import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS, FONTS, SPACING } from "../../styles/theme";

const { width } = Dimensions.get("window");
const isSmallScreen = width < 400;

export const forgotPasswordStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
    minHeight: Platform.OS === "web" ? 500 : "100%",
  },
  title: {
    fontSize: FONTS.xl,
    fontWeight: "700",
    marginBottom: SPACING.md,
    textAlign: "center",
    color: COLORS.textPrimary,
  },
  description: {
    fontSize: FONTS.md,
    marginBottom: SPACING.md,
    textAlign: "center",
    color: COLORS.textSecondary,
    maxWidth: 400, // limita anchura en web
  },
  inputWrapper: {
    width: "100%",
    maxWidth: 400, // limita anchura de inputs en web
    marginBottom: SPACING.md,
  },
  successText: {
    color: COLORS.primary,
    marginBottom: SPACING.sm,
    textAlign: "center",
    fontSize: FONTS.md,
  },
  backLink: {
    color: COLORS.secondary,
    marginTop: SPACING.md,
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: FONTS.md,
  },
});
