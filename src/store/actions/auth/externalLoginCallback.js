import * as actionTypes from './actionTypes';

export const externalLoginCallbackStart = (callBackData) => {
  return {
    type: actionTypes.EXTERNAL_LOGIN_CALLBACK_START,
    callBackData
  };
};

export const externalLoginCallbackSuccess = (authResult) => {
  return {
    type: actionTypes.EXTERNAL_LOGIN_CALLBACK_SUCCESS,
    authResult
  };
};

export const externalLoginCallbackFail = (error) => {
  return {
    type: actionTypes.EXTERNAL_LOGIN_CALLBACK_FAIL,
    error
  };
};
