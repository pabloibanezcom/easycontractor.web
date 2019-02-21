import * as actionTypes from './actionTypes';

export const searchClientsStart = (searchObj) => {
  return {
    type: actionTypes.SEARCH_CLIENTS_START,
    searchObj
  };
};

export const searchClientsSuccess = (clients) => {
  return {
    type: actionTypes.SEARCH_CLIENTS_SUCCESS,
    clients
  };
};

export const searchClientsFail = (error) => {
  return {
    type: actionTypes.SEARCH_CLIENTS_FAIL,
    error
  };
};
