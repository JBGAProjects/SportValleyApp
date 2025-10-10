import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { COLORS, FONTS, SPACING, RADIUS, SCREEN } from "../styles/theme";

interface SocialButtonProps {
  label: string;
  icon: any;
  backgroundColor?: string; // opcional, por defecto se usa COLORS.primary
  onPress?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  label,
  icon,
  backgroundColor = COLORS.primary,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const { width } = SCREEN;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 400,
    paddingVertical: width < 400 ? SPACING.sm : SPACING.md,
    borderRadius: RADIUS.md,
    marginVertical: SPACING.xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: width < 400 ? 18 : 22,
    height: width < 400 ? 18 : 22,
    marginRight: SPACING.sm,
    resizeMode: "contain",
  },
  label: {
    fontSize: width < 400 ? FONTS.md : FONTS.lg,
    color: COLORS.background, // blanco por defecto
    fontWeight: "600",
    textAlign: "center",
  },
});
