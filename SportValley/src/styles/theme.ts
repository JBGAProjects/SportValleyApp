// src/styles/theme.ts

import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#003366", // Azul oscuro deportivo
  secondary: "#1E88E5", // Azul claro
  accent: "#FF6B00", // Naranja energético (opcional)
  background: "#f2f2f2",
  textPrimary: "#0A192F",
  textSecondary: "#555555",
  placeholder: "#9E9E9E",
  border: "#E0E0E0",
  error: "#E53935",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const FONTS = {
  sm: 12,
  md: 14,
  lg: 18,
  xl: 24,
};

export const RADIUS = {
  sm: 6,
  md: 10,
  lg: 14,
  full: 999,
};

export const SHADOWS = {
  light: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // para Android
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  heavy: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
};

export const SCREEN = { width, height, isIOS: Platform.OS === "ios" };
