import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Komponen Button menerima label, onPress, dan style sebagai props
const Button = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {/* Teks tombol dibungkus dalam komponen <Text> */}
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Button;
