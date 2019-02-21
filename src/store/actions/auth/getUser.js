import * as actionTypes from './actionTypes';

export const getUserStart = (accessToken) => {
  return {
    type: actionTypes.GET_USER_START,
    accessToken
  };
};

export const getUserSuccess = (user) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    user
  };
};

export const getUserFail = (error) => {
  return {
    type: actionTypes.GET_USER_FAIL,
    error
  };
};
