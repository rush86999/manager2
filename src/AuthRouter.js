//import React from 'react';
//import { Scene, Router, Stack } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import ListEmployee from './components/ListEmployee';

const AuthRouterComponent = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Please Login',
    },
  },
  employeeList: {
    screen: EmployeeList,
    navigationOptions: {
      headerTitle: 'Employees',
      headerLeft: null,
      //headerRight: 'Add'
    }

  },
  employeeCreate: {
    screen: EmployeeCreate,
    headerTitle: 'Create Employee'
  },
  employeeEdit: {
    screen: EmployeeEdit,
    headerTitle: 'Edit Employee'
  },
  ListEmployee: {
    screen: ListEmployee
  }
/**
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Stack>
    </Router>
  );**/
});

export default AuthRouterComponent;
