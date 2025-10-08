import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SPACING, FONTSIZE } from "../styles/variables";
import { MaterialIcons } from '@expo/vector-icons';


interface ErrorMessageProps {
  message?: string|null;
}

/**
 * 🔴 ErrorMessage
 * Muestra un mensaje de error pequeño y sobrio debajo del input correspondiente.
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null; // No muestra nada si no hay error

  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={14} color={COLORS.errorText} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: SPACING.sm,
  },
  text: {
    color: COLORS.errorText,
    fontSize: FONTSIZE.sm,
    marginLeft: SPACING.xs,
  },
});