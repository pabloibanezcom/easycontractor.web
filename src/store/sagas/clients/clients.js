import * as actionTypes from "actions/clients/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { searchClientsSagaStart, searchInvoicesSagaStart } from './workers';

export const clientsSagas = [
  takeEvery(actionTypes.SEARCH_CLIENTS_START, searchClientsSagaStart),
  takeEvery(actionTypes.SEARCH_INVOICES_START, searchInvoicesSagaStart)
];
