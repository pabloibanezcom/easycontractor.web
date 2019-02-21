import * as actionTypes from 'actions/auth/actionTypes';

const initialState = {
  user: null,
  authTokens: null
};

const externalLoginCallbackSuccess = (state, action) => {
  return {
    ...state,
    authTokens: action.authResult
  };
};

const getUserSuccess = (state, action) => {
  return {
    ...state,
    user: action.user
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EXTERNAL_LOGIN_CALLBACK_SUCCESS: return externalLoginCallbackSuccess(state, action);
    case actionTypes.GET_USER_SUCCESS: return getUserSuccess(state, action);
    default: return state;
  }
};
