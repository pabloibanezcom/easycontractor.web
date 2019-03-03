import * as actionTypes from "actions/clients/actionTypes";
import { takeEvery } from "redux-saga/effects";
import { addWorkingDaysSagaStart, getAllClientsSagaStart, searchClientsSagaStart, searchInvoicesSagaStart } from './workers';

export const clientsSagas = [
  takeEvery(actionTypes.ADD_WORKING_DAYS_START, addWorkingDaysSagaStart),
  takeEvery(actionTypes.GET_ALL_CLIENTS_START, getAllClientsSagaStart),
  takeEvery(actionTypes.SEARCH_CLIENTS_START, searchClientsSagaStart),
  takeEvery(actionTypes.SEARCH_INVOICES_START, searchInvoicesSagaStart)
];
