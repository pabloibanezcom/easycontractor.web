import * as actionTypes from './actionTypes';

export const deleteClientStart = () => {
  return {
    type: actionTypes.DELETE_CLIENT_START
  };
};

export const deleteClientSuccess = () => {
  return {
    type: actionTypes.DELETE_CLIENT_SUCCESS
  };
};

export const deleteClientFail = (error) => {
  return {
    type: actionTypes.DELETE_CLIENT_FAIL,
    error
  };
};
