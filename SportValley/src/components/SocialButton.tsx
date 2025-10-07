import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
