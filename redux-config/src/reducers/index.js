/**
 * Created by liyang on 2017/9/26.
 */
import { combineReducers } from 'redux-immutable';
//import ui from './uireducers'
import todo from './todoreducers';

const rootReducer = combineReducers({
    todo,
});

export default rootReducer;