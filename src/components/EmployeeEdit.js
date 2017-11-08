import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import _ from 'lodash';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  componentWillMount() {
    const { navigation } = this.props;
    _.each(navigation.state.params.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;
    const { uid } = this.props.navigation.state.params.employee;
    console.log(name, phone, shift, uid, 'this is save changes');
    this.props.employeeSave({ name, phone, shift, uid, navigation });
  }
  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }
  onDecline() {
    this.setState({ showModal: false });
  }
  onAccept() {
    const { navigation } = this.props;
    const { uid } = this.props.navigation.state.params.employee;
    this.props.employeeDelete({ uid, navigation });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Employee
          </Button>
        </CardSection>

        <Confirm
        visible={this.state.showModal}
        onDecline={this.onDecline.bind(this)}
        onAccept={this.onAccept.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  console.log(employeeForm, 'this is the state.employeeForm');
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
