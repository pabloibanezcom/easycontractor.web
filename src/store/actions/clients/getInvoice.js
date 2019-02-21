import * as actionTypes from './actionTypes';

export const getInvoiceStart = () => {
  return {
    type: actionTypes.GET_INVOICE_START
  };
};

export const getInvoiceSuccess = () => {
  return {
    type: actionTypes.GET_INVOICE_START
  };
};

export const getInvoiceFail = (error) => {
  return {
    type: actionTypes.GET_INVOICE_FAIL,
    error
  };
};
