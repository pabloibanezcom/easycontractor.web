import * as actionTypes from './actionTypes';

export const updateSettingsStart = (settings) => {
  return {
    type: actionTypes.UPDATE_SETTINGS_START,
    settings
  };
};

export const updateSettingsSuccess = () => {
  return {
    type: actionTypes.UPDATE_SETTINGS_SUCCESS
  };
};

export const updateSettingsFail = (error) => {
  return {
    type: actionTypes.UPDATE_SETTINGS_FAIL,
    error
  };
};
