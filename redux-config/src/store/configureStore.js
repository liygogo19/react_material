/**
 * Created by liyang on 2017/9/26.
 */
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map({});

const todoStore =  createStore(
    rootReducer,
    initialState,
    applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }))
);

// let unsubscribe = todoStore.subscribe(() => {
//         todoStore.getState();
// });
//
// unsubscribe();

export default todoStore;
