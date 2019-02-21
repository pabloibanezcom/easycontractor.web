import * as actionTypes from './actionTypes';

export const editInvoiceStart = () => {
  return {
    type: actionTypes.EDIT_INVOICE_START
  };
};

export const editInvoiceSuccess = () => {
  return {
    type: actionTypes.EDIT_INVOICE_SUCCESS
  };
};

export const editInvoiceFail = (error) => {
  return {
    type: actionTypes.EDIT_INVOICE_FAIL,
    error
  };
};
