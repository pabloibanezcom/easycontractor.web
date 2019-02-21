import * as actions from 'actions/clients';
import { put } from 'redux-saga/effects';
import ClientsService from 'services/clients.service';

export function* searchClientsSagaStart(action) {
  try {
    const res = yield ClientsService.searchClients(action.searchObj);
    yield put(actions.searchClientsSuccess(res.data));
  } catch (err) {
    yield put(actions.searchClientsFail(err));
  }
}
