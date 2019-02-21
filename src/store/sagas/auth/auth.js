import * as actionTypes from "actions/auth/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { externalLoginCallbackSagaStart, externalLoginSagaStart, getUserSagaStart, loginSagaStart, logoutSagaStart } from './workers';

export const authSagas = [
  takeEvery(actionTypes.EXTERNAL_LOGIN_START, externalLoginSagaStart),
  takeEvery(actionTypes.EXTERNAL_LOGIN_CALLBACK_START, externalLoginCallbackSagaStart),
  takeEvery(actionTypes.LOGIN_START, loginSagaStart),
  takeEvery(actionTypes.LOGOUT_START, logoutSagaStart),
  takeEvery(actionTypes.GET_USER_START, getUserSagaStart)
];
