import * as actions from 'actions/clients';
import { put, select } from 'redux-saga/effects';
import ClientsService from 'services/clients.service';

export function* getAllClientsSagaStart() {
  try {
    const state = yield select();
    const res = yield ClientsService.searchClients({ companyId: state.company.company._id });
    yield put(actions.getAllClientsSuccess(res.data));
  } catch (err) {
    yield put(actions.getAllClientsFail(err));
  }
}
