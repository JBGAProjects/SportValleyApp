import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet, Platform, Dimensions } from 'react-native';

interface SocialButtonProps {
  label: string;
  icon: any;
  backgroundColor: string;
  onPress?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  label,
  icon,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window"); // Ancho de pantalla para adaptividad

export const styles = StyleSheet.create({
  button: {
    width: "100%", // Siempre ocupará todo el ancho disponible del contenedor
    maxWidth: 400, // Evita que sea demasiado ancho en pantallas grandes (web)
    paddingVertical: Platform.OS === "ios" ? 14 : 12, // Ajusta altura según SO
    borderRadius: 10,
    marginVertical: 6,
    alignItems: "center",
    flexDirection: "row", // Para alinear icono y texto en fila
    justifyContent: "center",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: width < 400 ? 18 : 22, // Tamaño del icono adaptativo
    height: width < 400 ? 18 : 22,
    marginRight: 10,
    resizeMode: "contain", // Mantiene proporción del icono
  },

  label: {
    fontSize: width < 400 ? 14 : 16, // Texto más pequeño en pantallas pequeñas
    color: "#fff", // Color por defecto, se puede sobrescribir con prop
    fontWeight: "600",
    textAlign: "center",
  },
});
