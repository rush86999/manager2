import { Modal, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  this.state = { modalVisible: false };
const { containerStyle, textStyle, cardSectionStyle } = styles;
    return (
        <Modal
        animationType="slide"
        onRequestClose={() => {}}
        transparent
        visible={visible}
        >
          <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
              <Text style={textStyle}>
                {children}
              </Text>
            </CardSection>

            <CardSection>
              <Button onPress={onAccept}>Yes </Button>
              <Button onPress={onDecline}> No</Button>
            </CardSection>
          </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

export { Confirm };
