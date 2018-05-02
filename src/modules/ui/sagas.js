import { takeEvery, call, put } from "redux-saga/effects";

import {
    getPageData
} from './api';

import {
    REQUEST_ADD_ITEM,
    REQUEST_PAGE_DATA,
    receivePageData,
    receiveAddItem
} from './actions';

function* callRequestAddItem(action) {
    // api if Need
    yield put(receiveAddItem(action.payload));
}

export function* requestAddItemSaga() {
    yield takeEvery(REQUEST_ADD_ITEM, callRequestAddItem);
}

function* callRequestPageData(action) {

    let results = yield call(getPageData, action.payload);

    yield put(receivePageData(results));
}

export function* requestPageDataSaga() {
    yield takeEvery(REQUEST_PAGE_DATA, callRequestPageData)
}