import * as actionTypes from './actionTypes';

export const searchInvoicesStart = (searchObj) => {
  return {
    type: actionTypes.SEARCH_INVOICES_START,
    searchObj
  };
};

export const searchInvoicesSuccess = (result) => {
  return {
    type: actionTypes.SEARCH_INVOICES_SUCCESS,
    result
  };
};

export const searchInvoicesFail = (error) => {
  return {
    type: actionTypes.SEARCH_INVOICES_FAIL,
    error
  };
};
