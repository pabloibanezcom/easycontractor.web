import * as actions from 'actions/auth';
import { put } from 'redux-saga/effects';
import AuthService from 'services/auth.service';

export function* loginSagaStart(action) {
  try {
    yield AuthService.login(action.email, action.password);
    yield put(actions.loginSuccess());
  } catch (err) {
    yield put(actions.loginFail(err));
  }
}
