import * as actionTypes from './actionTypes';

export const addInvoiceStart = () => {
  return {
    type: actionTypes.ADD_INVOICE_START
  };
};

export const addInvoiceSuccess = () => {
  return {
    type: actionTypes.ADD_INVOICE_SUCCESS
  };
};

export const addInvoiceFail = (error) => {
  return {
    type: actionTypes.ADD_INVOICE_FAIL,
    error
  };
};
