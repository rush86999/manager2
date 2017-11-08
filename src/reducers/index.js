import { combineReducers } from 'redux';
import NavReducer from '../AuthRouterReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    navigationState: NavReducer,
    employees: EmployeeReducer,
  });
