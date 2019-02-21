import * as actionTypes from './actionTypes';

export const externalLoginStart = (provider) => {
  return {
    type: actionTypes.EXTERNAL_LOGIN_START,
    provider
  };
};

export const externalLoginSuccess = () => {
  return {
    type: actionTypes.EXTERNAL_LOGIN_SUCCESS
  };
};

export const externalLoginFail = (error) => {
  return {
    type: actionTypes.EXTERNAL_LOGIN_FAIL,
    error
  };
};
