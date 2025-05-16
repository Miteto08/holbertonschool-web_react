import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import coursesReducer from './coursesReducer';
import notificationsReducer from './notificationsReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    courses: coursesReducer,
    notifications: notificationsReducer,
});

export default rootReducer;
