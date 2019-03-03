import * as actionTypes from "actions/company/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { getCalendarSagaStart } from './workers';

export const companySagas = [
  takeEvery(actionTypes.GET_CALENDAR_START, getCalendarSagaStart)
];
