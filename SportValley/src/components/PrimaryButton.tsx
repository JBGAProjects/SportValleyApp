import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

/**
 * PrimaryButtonProps
 * ------------------
 * Props del botón principal:
 * - label: Texto que se mostrará en el botón.
 * - onPress: Función que se ejecuta al tocar el botón.
 * - style (opcional): Permite sobreescribir o extender estilos del botón.
 * - textStyle (opcional): Permite sobreescribir o extender estilos del texto.
 */
interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
    disabled?: boolean; 
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  style,
  textStyle,
}) => {
  return (
    /**
     * TouchableOpacity crea un botón que reacciona al toque
     * y reduce la opacidad al presionar (feedback visual).
     */
    <TouchableOpacity
      style={[styles.button, style]} // Combina estilos predeterminados + estilos opcionales
      onPress={onPress}
      activeOpacity={0.8}           // Efecto al presionar
    >
      {/* Texto del botón */}
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

/**
 * Estilos predeterminados del botón
 * Diseño neutro y moderno:
 * - Colores suaves
 * - Borde redondeado
 * - Sombra ligera
 * - Fuente legible y centrada
 */
const styles = StyleSheet.create<{
  button: ViewStyle;
  label: TextStyle;
}>({
  button: {
    backgroundColor: '#007BFF',    // Azul moderno, neutro y agradable
    paddingVertical: 14,           // Altura del botón
    paddingHorizontal: 20,         // Espaciado horizontal
    borderRadius: 10,              // Bordes redondeados modernos
    alignItems: 'center',          // Centrar texto horizontalmente
    justifyContent: 'center',      // Centrar texto verticalmente
    shadowColor: '#000',           // Sombra ligera para efecto 3D
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,                  // Sombra en Android
    marginTop: 10,                 // Separación con elementos anteriores
  },
  label: {
    color: '#fff',                 // Texto blanco
    fontSize: 16,
    fontWeight: '600',
  },
});
