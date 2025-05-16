import { Map, setIn } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';


// Default state as an Immutable.js Map
const initialState = Map({
  filter: NotificationTypeFilters.DEFAULT,
  notifications: Map(),
  loading: false,
});

// Notifications reducer function
export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = action.notifications.map(n => ({
        ...n,
        isRead: false
      }));
      const normalized = {
        notifications : Map(notificationsNormalizer(data).entities)
      };
      return state.mergeDeep(normalized);
    }

    case MARK_AS_READ:
       return setIn(state, ['notifications', 'messages', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    default:
      return state;
  }
}

export default notificationReducer;
