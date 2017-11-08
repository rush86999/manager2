// import libraries to make a Component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// make a Component
// make component available to other parts of the App done by export default class
// render to screen done by render() function

const Header = ({ headerText }) => {
  const { textStyle, container } = styles;
    return (
      <View style={container}>
        <Text style={textStyle}>
          {headerText}
        </Text>
      </View>
  );
};

export { Header };
// style the Component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aff',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  }
});
