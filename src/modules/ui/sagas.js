import { takeEvery, call, put }  from 'redux-saga/effects';

import {
getPageData,
getProductData
} from './api';

import {

    REQUEST_PRODUCT_DATA,
    REQUEST_PAGE_DATA,

    recieveProductData,
    recievePageData,

} from './actions';

function* callRequestProductData(action){
    var results = yield call(getProductData,action.payload);
    yield put(recieveProductData(results));
}

export function* requestProductDataSaga(){
    yield takeEvery(REQUEST_PRODUCT_DATA,callRequestProductData)
}

function* callRequestPageData(action){
    var results = yield call(getPageData,action.payload);
    yield put(recievePageData(results));
}

export function* requestPageDataSaga(){
    yield takeEvery(REQUEST_PAGE_DATA,callRequestPageData)
}