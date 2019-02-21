import * as actionTypes from "actions/settings/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { getSettingsSagaStart, updateSettingsSagaStart } from './workers';

export const settingsSagas = [
  takeEvery(actionTypes.GET_SETTINGS_START, getSettingsSagaStart),
  takeEvery(actionTypes.UPDATE_SETTINGS_START, updateSettingsSagaStart)
];