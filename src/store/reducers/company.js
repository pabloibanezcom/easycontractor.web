import * as actionTypes from 'actions/company/actionTypes';

const initialState = {
  company: null,
};

const setCompany = (state, action) => {
  return {
    ...state,
    company: action.company
  };
}

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMPANY: return setCompany(state, action);
    default: return state;
  }
};
