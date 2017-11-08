import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { CardSection } from './common';

class ListEmployee extends Component {
  onRowPress() {
    const { employee, navigation } = this.props;
    console.log(employee, navigation, 'inside onRowPress');
    return navigation.navigate('employeeEdit', { employee });
}

  render() {
  const { textStyle } = styles;
  const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={textStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

/**
 second argument in connect does 2 things. 1.  dispatches all actions creators
return action objects to the store to be used by reducers; 2. creates props
of action creators to be used by components
**/
export default ListEmployee;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
});
