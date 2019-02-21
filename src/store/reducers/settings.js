import * as actionTypes from 'actions/settings/actionTypes';

const initialState = {
  settings: null
};

const getSettingsSuccess = (state, action) => {
  return {
    ...state,
    settings: action.settings
  };
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SETTINGS_SUCCESS: return getSettingsSuccess(state, action);
    default: return state;
  }
};
