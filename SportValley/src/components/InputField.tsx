import React from 'react';
import { View, TextInput, Text, StyleSheet, TextStyle, ViewStyle, TextInputProps } from 'react-native';

/**
 * InputFieldProps
 * ----------------
 * Props del componente InputField:
 * - label (opcional): Texto que describe el input (ej. "Correo electrónico")
 * - placeholder: Texto que se muestra cuando el input está vacío
 * - style (opcional): Permite sobreescribir estilos del contenedor
 * - inputStyle (opcional): Permite sobreescribir estilos del TextInput
 * - ...props: Todas las props válidas de TextInput (keyboardType, secureTextEntry, value, onChangeText, etc)
 */
interface InputFieldProps extends TextInputProps {
  label?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

export const InputField: React.FC<InputFieldProps> = ({ label, style, inputStyle, ...props }) => {
  return (
    /**
     * Contenedor principal del input
     * - Permite agregar margen, padding, y agrupar label + input
     */
    <View style={[styles.container, style]}>
      {/* Label opcional */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/**
       * TextInput: campo editable para el usuario
       * - {...props} propaga todas las props de TextInput pasadas desde la pantalla
       * - style={styles.input} aplica el diseño moderno
       * - placeholderTextColor define el color del placeholder (neutro y legible)
       */}
      <TextInput
        {...props}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#999"
      />
    </View>
  );
};

/**
 * Estilos predeterminados del input
 * Diseño neutro y moderno:
 * - Borde redondeado
 * - Color de fondo claro
 * - Padding interno
 * - Label legible
 */
const styles = StyleSheet.create<{
  container: ViewStyle;
  label: TextStyle;
  input: TextStyle;
}>({
  container: {
    width: '100%',              // Ocupa todo el ancho del contenedor padre
    marginBottom: 15,           // Separación entre inputs
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,          // Bordes redondeados modernos
    paddingHorizontal: 14,     // Espacio interno a la izquierda/derecha
    backgroundColor: '#f9f9f9', // Fondo neutro claro
    fontSize: 16,
    color: '#000',
  },
});
