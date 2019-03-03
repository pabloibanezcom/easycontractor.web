import * as actions from 'actions/company';
import { put, select } from 'redux-saga/effects';
import CompanyService from 'services/company.service';

export function* getCalendarSagaStart(action) {
  try {
    const state = yield select();
    const res = yield CompanyService.getCalendar(state.company.company._id, action.year, action.month);
    yield put(actions.getCalendarSuccess({ year: action.year, month: action.month, days: res.data }));
  } catch (err) {
    yield put(actions.getCalendarFail(err));
  }
}
