import { combineReducers } from 'redux';
import authReducer from './authReducer';
import notificationsReducer from './notificationsReducer';
import coursesReducer from './coursesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    notifications: notificationsReducer,
    courses: coursesReducer
});

export default rootReducer;