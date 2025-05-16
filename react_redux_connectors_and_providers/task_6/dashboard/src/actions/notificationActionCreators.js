import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

// Action creator for marking a notification as read
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

// Action creator for setting the notification filter
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

// Action creator for setting the loading state
export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
}

// Action creator for setting notifications
export function setNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
  };
}

// Action creator for fetching notifications
export function fetchNotifications() {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('/notifications.json')
      .then((response) => response.json())
      .then((json) => dispatch(setNotifications(json)))
      .finally(() => dispatch(setLoadingState(false)));
  }
}

// Function that binds the action creators to the dispatch
export function boundNotificationActions(dispatch) {
  return bindActionCreators(
    {
      markAsRead,
      setNotificationFilter,
      setLoadingState,
      setNotifications,
      fetchNotifications,
    },
    dispatch
  );
}
