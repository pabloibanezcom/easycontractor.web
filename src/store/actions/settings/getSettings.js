import * as actionTypes from './actionTypes';

export const getSettingsStart = () => {
  return {
    type: actionTypes.GET_SETTINGS_START
  };
};

export const getSettingsSuccess = (settings) => {
  return {
    type: actionTypes.GET_SETTINGS_SUCCESS,
    settings
  };
};

export const getSettingsFail = (error) => {
  return {
    type: actionTypes.GET_SETTINGS_FAIL,
    error
  };
};
