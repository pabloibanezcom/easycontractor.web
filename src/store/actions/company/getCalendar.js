import * as actionTypes from './actionTypes';

export const getCalendarStart = (year, month) => {
  return {
    type: actionTypes.GET_CALENDAR_START,
    year,
    month
  };
};

export const getCalendarSuccess = (calendar) => {
  return {
    type: actionTypes.GET_CALENDAR_SUCCESS,
    calendar
  };
};

export const getCalendarFail = (error) => {
  return {
    type: actionTypes.GET_CALENDAR_FAIL,
    error
  };
};
