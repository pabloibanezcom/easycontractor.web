import * as actions from 'actions/auth';
import { put } from 'redux-saga/effects';
import AuthService from 'services/auth.service';

export function* getUserSagaStart(action) {
  try {
    const res = yield AuthService.getUser(action.accessToken);
    yield put(actions.getUserSuccess(res.data));
  } catch (err) {
    yield put(actions.getUserFail(err));
  }
}
