import * as actions from 'actions/auth';
import { put } from 'redux-saga/effects';
import AuthService from 'services/auth.service';

export function* externalLoginCallbackSagaStart(action) {
  try {
    const authResult = yield AuthService.externalLoginCallback(action.callBackData);
    yield put(actions.externalLoginCallbackSuccess(authResult));
  } catch (err) {
    yield put(actions.externalLoginCallbackFail(err));
  }
}
