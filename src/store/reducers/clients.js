import * as actionTypes from 'actions/clients/actionTypes';

const initialState = {
  clients: null,
  currentClient: null,
  invoices: null,
  currentInvoice: null
};

const getAllClientsSuccess = (state, action) => {
  return {
    ...state,
    clients: action.clients
  };
};

const searchClientsSuccess = (state, action) => {
  return {
    ...state,
    clients: action.clients
  };
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CLIENTS_SUCCESS: return getAllClientsSuccess(state, action);
    case actionTypes.SEARCH_CLIENTS_SUCCESS: return searchClientsSuccess(state, action);
    default: return state;
  }
};
