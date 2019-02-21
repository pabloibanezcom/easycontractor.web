import * as actionTypes from './actionTypes';

export const getClientStart = () => {
  return {
    type: actionTypes.GET_CLIENT_START
  };
};

export const getClientSuccess = () => {
  return {
    type: actionTypes.GET_CLIENT_SUCCESS
  };
};

export const getClientFail = (error) => {
  return {
    type: actionTypes.GET_CLIENT_FAIL,
    error
  };
};
