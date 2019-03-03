import * as actions from 'actions/clients';
import { put } from 'redux-saga/effects';
import ClientsService from 'services/clients.service';
import NotificationService from 'services/notification.service';

export function* addWorkingDaysSagaStart(action) {
  try {
    yield ClientsService.addWorkingDays(action.clientId, action.workingDays);
    yield put(actions.addWorkingDaysSuccess());
    NotificationService.success('Working day logged', 'Working day logged');
  } catch (err) {
    yield put(actions.addWorkingDaysFail(err));
    NotificationService.error('Working day logged', 'There was an error by logging that work');
  }
}
