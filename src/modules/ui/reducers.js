import {
    RECIEVE_PRODUCT_DATA,
    recieveProductData,
    recievePageData,
    RECIEVE_PAGE_DATA
} from './actions';
import { handleAction, combineActions } from 'redux-actions';

var defaultState = {
    items: []
};

export const ui = handleAction(
    combineActions(
        recieveProductData,
        recievePageData
    ),
    {
        next(state, action) {
            switch (action.type) {
                case RECIEVE_PRODUCT_DATA:
                    var newState = {
                        ...state
                    };
                    newState.productData = action.payload;
                    return newState;
                case RECIEVE_PAGE_DATA:
                    var newState = {
                        ...state
                    };
                    newState.pageData = action.payload;
                    return newState;

                default:
                    return state;
            }

        },
    
        throw(state, action) {
            switch (action.type) {
                case RECIEVE_PRODUCT_DATA:
                    var newState = {
                        ...state
                    };
                    newState.productDataError = action.payload;
                    return newState;
                case RECIEVE_PAGE_DATA:
                    var newState = {
                        ...state
                    };
                    newState.pageDataError = action.payload;
                    return newState;

                default:
                    return state;
            }
        }
    
    },
    defaultState

)