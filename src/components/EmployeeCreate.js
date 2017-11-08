import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, resetForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetForm();
  }
  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;
//loophole in javascript (null || value) = value
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
  }
    render() {
      return (
        <Card>
          <EmployeeForm {...this.props} />

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
      );
    }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeCreate,
  resetForm
})(EmployeeCreate);
