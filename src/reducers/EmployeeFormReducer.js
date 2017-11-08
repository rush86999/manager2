import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS,
  RESET_FORM
 } from '../actions/types';

const INITIAL_STATE = {
  // prop: 'name', value: ''
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMPLOYEE_UPDATE:
      console.log(action, state, 'this is the reducer');
// [] is NOT an array; a syntax to convert value into key; called key interpolation??
        return { ...state, [action.payload.prop]: action.payload.value };
      case EMPLOYEE_CREATE:
        return INITIAL_STATE;
      case EMPLOYEE_SAVE_SUCCESS:
        return INITIAL_STATE;
      case EMPLOYEE_DELETE_SUCCESS:
        return INITIAL_STATE;
      case RESET_FORM:
        return INITIAL_STATE;
      default:
        return state;
    }
};
