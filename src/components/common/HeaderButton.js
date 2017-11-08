import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const HeaderButton = ({ onPress, children }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export { HeaderButton };

const styles = StyleSheet.create({
    buttonStyle: {
      flex: 1,
    //  alignSelf: 'stretch',
      //backgroundColor: '',
      marginLeft: 5,
      marginRight: 5,
    //  borderRadius: 5,

    },
    textStyle: {
      //alignSelf: 'center',
      fontSize: 16,
      fontWeight: '600',
      color: '#007aff',
      paddingTop: 12,
      //paddingBottom: 5
    }
});
