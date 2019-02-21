import { all } from "redux-saga/effects";
import { authSagas } from './auth';
import { clientsSagas } from './clients';
import { settingsSagas } from './settings';

export function* watchAll() {
  yield all([
    ...authSagas,
    ...clientsSagas,
    ...settingsSagas
  ])
}