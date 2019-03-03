import * as actionTypes from './actionTypes';

export const addWorkingDaysStart = (clientId, workingDays) => {
  return {
    type: actionTypes.ADD_WORKING_DAYS_START,
    clientId,
    workingDays
  };
};

export const addWorkingDaysSuccess = () => {
  return {
    type: actionTypes.ADD_WORKING_DAYS_SUCCESS
  };
};

export const addWorkingDaysFail = (error) => {
  return {
    type: actionTypes.ADD_WORKING_DAYS_FAIL,
    error
  };
};
