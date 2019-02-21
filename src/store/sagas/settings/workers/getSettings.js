import * as actions from 'actions/settings';
import { put } from 'redux-saga/effects';
import SettingsService from 'services/settings.service';

export function* getSettingsSagaStart() {
    try {
        const res = yield SettingsService.getSettings();
        yield put(actions.getSettingsSuccess(res.data));
    } catch (err) {
        yield put(actions.getSettingsFail(err));
    }
}
