import * as actionTypes from './actionTypes';

export const logoutStart = () => {
  return {
    type: actionTypes.LOGOUT_START
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
};

export const logoutFail = (error) => {
  return {
    type: actionTypes.LOGOUT_FAIL,
    error
  };
};
