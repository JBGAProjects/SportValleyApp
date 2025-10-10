import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING, FONTS, RADIUS } from "../styles/theme";

interface InputFieldProps extends TextInputProps {
  label?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  style,
  inputStyle,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <LinearGradient
        colors={
          error
            ? [COLORS.error, COLORS.error] // rojo si hay error
            : isFocused
            ? [COLORS.secondary, COLORS.primary] // degradado azul cuando está enfocado
            : [COLORS.border, COLORS.border] // gris cuando está inactivo
        }
        style={styles.gradientBorder}
      >
        <View style={styles.inputWrapper}>
          <TextInput
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={[styles.input, inputStyle]}
            placeholderTextColor={COLORS.placeholder}
          />
        </View>
      </LinearGradient>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: SPACING.lg,
  },
  label: {
    fontSize: FONTS.md,
    fontWeight: "700",
    color: COLORS.textPrimary,
    textTransform: "uppercase",
    marginBottom: SPACING.sm,
    letterSpacing: 0.5,
  },
  gradientBorder: {
    borderRadius: RADIUS.lg,
    padding: 2, // grosor del borde degradado
  },
  inputWrapper: {
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.background,
    overflow: "hidden",
  },
  input: {
    height: 52,
    fontSize: FONTS.md,
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING.md,
    fontWeight: "500",
    backgroundColor: COLORS.background,
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONTS.sm,
    marginTop: SPACING.xs,
    marginLeft: SPACING.xs,
  },
});
