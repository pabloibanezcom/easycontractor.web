import * as actionTypes from './actionTypes';

export const addClientStart = () => {
  return {
    type: actionTypes.ADD_CLIENT_START
  };
};

export const addClientSuccess = () => {
  return {
    type: actionTypes.ADD_CLIENT_SUCCESS
  };
};

export const addClientFail = (error) => {
  return {
    type: actionTypes.ADD_CLIENT_FAIL,
    error
  };
};
