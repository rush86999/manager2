import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,

    },
    textStyle: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '600',
      color: '#ffffff',
      paddingTop: 10,
      paddingBottom: 10
    }
});
