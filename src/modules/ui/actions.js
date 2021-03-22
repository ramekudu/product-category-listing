import { createAction } from 'redux-actions';
// action type
// request* REQUEST_*
// recieve* RECIEVE_*


export const REQUEST_PRODUCT_DATA = 'REQUEST_PRODUCT_DATA';
export const RECIEVE_PRODUCT_DATA = 'RECIEVE_PRODUCT_DATA';

export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA';
export const RECIEVE_PAGE_DATA = 'RECIEVE_PAGE_DATA';

 export const requestProductData = createAction(REQUEST_PRODUCT_DATA);
 export const recieveProductData = createAction(RECIEVE_PRODUCT_DATA);
 export const requestPageData = createAction(REQUEST_PAGE_DATA);
 export const recievePageData = createAction(RECIEVE_PAGE_DATA);
    