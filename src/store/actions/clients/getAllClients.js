import * as actionTypes from './actionTypes';

export const getAllClientsStart = () => {
  return {
    type: actionTypes.GET_ALL_CLIENTS_START
  };
};

export const getAllClientsSuccess = (clients) => {
  return {
    type: actionTypes.GET_ALL_CLIENTS_SUCCESS,
    clients
  };
};

export const getAllClientsFail = (error) => {
  return {
    type: actionTypes.GET_ALL_CLIENTS_FAIL,
    error
  };
};
