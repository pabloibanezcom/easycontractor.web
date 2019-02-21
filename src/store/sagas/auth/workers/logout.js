import * as actions from 'actions/auth';
import { put } from 'redux-saga/effects';
import AuthService from 'services/auth.service';

export function* logoutSagaStart() {
  try {
    yield AuthService.logout();
    yield put(actions.logoutSuccess());
  } catch (err) {
    yield put(actions.logoutFail(err));
  }
}
