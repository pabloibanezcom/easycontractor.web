import * as actionTypes from './actionTypes';

export const setCompany = (company) => {
  return {
    type: actionTypes.SET_COMPANY,
    company
  };
};
