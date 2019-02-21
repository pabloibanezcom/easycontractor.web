import * as actionTypes from './actionTypes';

export const editClientStart = () => {
  return {
    type: actionTypes.EDIT_CLIENT_START
  };
};

export const editClientSuccess = () => {
  return {
    type: actionTypes.EDIT_CLIENT_SUCCESS
  };
};

export const editClientFail = (error) => {
  return {
    type: actionTypes.EDIT_CLIENT_FAIL,
    error
  };
};
