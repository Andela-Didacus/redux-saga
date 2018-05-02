import { handleAction, combineActions } from "redux-actions";

import {
    RECEIVE_ADD_ITEM,
    RECEIVE_PAGE_DATA,
    receivePageData,
    receiveAddItem
} from "./actions";

let defaultState = {
    items: []
};

export const ui = handleAction(

    combineActions(
        receiveAddItem,
        receivePageData
    ),
    {
        next(state, action) {
            switch (action.type) {
                case RECEIVE_ADD_ITEM:
                    let newState = {
                        ...state
                    };

                    newState.items = [].concat(newState.items);

                    if(Array.isArray(action.payload)) {
                        newState.items = newState.items.concat(action.payload);
                    } else {
                         newState.items.push(action.payload);
                    }

                    return newState;

                case RECEIVE_PAGE_DATA:
                    var newState = {
                        ...state
                    };

                    newState.PageData = action.payload;
                    return newState;

                default:
                    return state
            }
        },
        throw(state, action) {
            switch( action.payload) {
                case RECEIVE_ADD_ITEM:
                    let newState = {
                        ...state
                    };

                    newState.itemsError = action.payload;

                    return newState;

                case RECEIVE_PAGE_DATA:
                    var newState = {
                        ...state
                    };

                    newState.pageDataError = action.payload;

                    return newState;

                default:
                    return state;
            }
        }

    }, defaultState
);
