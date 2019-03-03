import * as actionTypes from 'actions/company/actionTypes';

const initialState = {
  company: null,
  calendar: null
};

const setCompany = (state, action) => {
  return {
    ...state,
    company: action.company
  };
}

const getCalendarStart = (state) => {
  return {
    ...state,
    calendar: null
  };
}

const getCalendarSuccess = (state, action) => {
  return {
    ...state,
    calendar: action.calendar
  };
}

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMPANY: return setCompany(state, action);
    case actionTypes.GET_CALENDAR_START: return getCalendarStart(state, action);
    case actionTypes.GET_CALENDAR_SUCCESS: return getCalendarSuccess(state, action);
    default: return state;
  }
};
