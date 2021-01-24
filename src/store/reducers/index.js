import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    data: reducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))