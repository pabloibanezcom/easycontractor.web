import * as actionTypes from './actionTypes';

export const deleteInvoiceStart = () => {
  return {
    type: actionTypes.DELETE_INVOICE_START
  };
};

export const deleteInvoiceSuccess = () => {
  return {
    type: actionTypes.DELETE_INVOICE_SUCCESS
  };
};

export const deleteInvoiceFail = (error) => {
  return {
    type: actionTypes.DELETE_INVOICE_FAIL,
    error
  };
};
