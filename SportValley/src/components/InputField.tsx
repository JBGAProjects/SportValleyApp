import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity, // <--- Importado para el botón del ojo
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
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
  secureTextEntry, // <--- Extraído de props
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // Estado para manejar la visibilidad del texto, solo si es un campo de contraseña
  const [isTextVisible, setIsTextVisible] = useState(!secureTextEntry);

  // Determinar si debemos mostrar el icono del ojo
  const showVisibilityToggle = secureTextEntry === true;

  // La propiedad secureTextEntry del TextInput se basa en si es un campo de contraseña Y si el texto no debe ser visible
  const finalSecureTextEntry = showVisibilityToggle
    ? !isTextVisible
    : secureTextEntry;

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
        {/* Modificado para usar flexDirection: 'row' para alinear input y ojo */}
        <View style={styles.inputWrapper}>
          <TextInput
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            // Usamos la propiedad calculada
            secureTextEntry={finalSecureTextEntry}
            style={[
              styles.input,
              inputStyle,
              showVisibilityToggle && { paddingRight: 0 },
            ]} // Quita padding extra si hay icono
            placeholderTextColor={COLORS.placeholder}
          />

          {/* Icono de visibilidad (ojo) */}
          {showVisibilityToggle && (
            <TouchableOpacity
              onPress={() => setIsTextVisible(!isTextVisible)}
              style={styles.visibilityToggle}
              activeOpacity={0.7}
            >
              <Icon
                name={isTextVisible ? "eye-off-outline" : "eye-outline"}
                size={24}
                color={COLORS.textSecondary || "#666"}
              />
            </TouchableOpacity>
          )}
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
    flexDirection: "row", // <--- Clave: alinear input y ojo horizontalmente
    alignItems: "center",
  },
  input: {
    flex: 1, // <--- Clave: el input ocupa el espacio restante
    height: 52,
    fontSize: FONTS.md,
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING.md,
    fontWeight: "500",
    backgroundColor: COLORS.background,
  },
  visibilityToggle: {
    height: 52,
    paddingHorizontal: SPACING.md,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONTS.sm,
    marginTop: SPACING.xs,
    marginLeft: SPACING.xs,
  },
});
