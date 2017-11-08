import { SELECT_EMPLOYEE } from '../actions/types';

export default (state = null, action) => {
  //when reducer initially loads, cannot be undefined so return null until planning function
switch (action.type) {
  case SELECT_EMPLOYEE:
    return action.payload;
  default:
    return state;
  }
};
