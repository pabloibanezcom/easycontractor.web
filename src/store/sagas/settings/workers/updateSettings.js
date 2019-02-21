import * as actions from 'actions/settings';
import { put } from 'redux-saga/effects';
import SettingsService from 'services/settings.service';

export function* updateSettingsSagaStart(action) {
  try {
    yield SettingsService.updateSettings(action.settings);
    yield put(actions.updateSettingsSuccess());
  } catch (err) {
    yield put(actions.updateSettingsFail(err));
  }
}
