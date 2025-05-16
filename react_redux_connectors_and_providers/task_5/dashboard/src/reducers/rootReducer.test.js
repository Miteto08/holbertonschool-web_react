import { fromJS } from 'immutable';
import rootReducer from './rootReducer';

describe('Root Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            courses: {
                courses: [],
            },
            notifications: {
                filter: 'DEFAULT',
                notifications: {},
            },
            ui: {
                isNotificationDrawerVisible: false,
                isUserLoggedIn: false,
                user: null,
            },
        });

        const receivedState = rootReducer(undefined, {});

        expect(receivedState.courses.toJS()).toEqual(expectedState.get('courses').toJS());
        expect(receivedState.notifications.toJS()).toEqual(expectedState.get('notifications').toJS());
        expect(receivedState.ui.toJS()).toEqual(expectedState.get('ui').toJS());
    });
});