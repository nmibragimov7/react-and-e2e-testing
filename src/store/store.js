import {combineReducers, configureStore} from "@reduxjs/toolkit";

import counterReducer from './reducer/counterReducer';

const reducer = combineReducers({
    counter: counterReducer
})

export const createStore = (initialState = {}) => {
    return configureStore({
        reducer,
        preloadedState: initialState // {counter: {value: 10}}
    });
}
