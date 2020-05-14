import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = props => (
  <TouchableOpacity
    style={[
      styles.button,
      props.style,
      props.disabled && styles.buttonDisabled,
    ]}
    disabled={props.disabled}
    onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '60%',
    backgroundColor: '#FD6592',
    borderRadius: 3,
    height: 40,
    marginHorizontal: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default CustomButton;
