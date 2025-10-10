import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SPACING, FONTS } from "../styles/theme";

interface ErrorMessageProps {
  message?: string | null;
}

/**
 * ErrorMessage
 * Muestra un mensaje de error debajo del input correspondiente.
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null; // No muestra nada si no hay error

  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={14} color={COLORS.error} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  text: {
    color: COLORS.error,
    fontSize: FONTS.sm,
    marginLeft: SPACING.xs,
  },
});
