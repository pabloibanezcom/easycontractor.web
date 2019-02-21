import * as actions from 'actions/clients';
import { put } from 'redux-saga/effects';
import ClientsService from 'services/clients.service';

export function* searchInvoicesSagaStart(action) {
  try {
    const res = yield ClientsService.searchInvoices(action.searchObj);
    yield put(actions.searchInvoicesSuccess(res.data));
  } catch (err) {
    yield put(actions.searchInvoicesFail(err));
  }
}
