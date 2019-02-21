import * as actions from 'actions/auth';
import { put } from 'redux-saga/effects';
import AuthService from 'services/auth.service';

export function* externalLoginSagaStart(action) {
  try {
    yield AuthService.externalLogin(action.provider);
    yield put(actions.externalLoginSuccess());
  } catch (err) {
    yield put(actions.externalLoginFail(err));
  }
}
