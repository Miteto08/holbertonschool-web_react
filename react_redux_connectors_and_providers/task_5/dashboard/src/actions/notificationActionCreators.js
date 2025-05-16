import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import { notificationsNormalizer } from '../schema/notifications';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
}

export function setNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
  };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));

    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        const normalizedData = notificationsNormalizer(data);
        dispatch(setNotifications(normalizedData));
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        console.error('Error fetching notifications:', error);
        dispatch(setLoadingState(false));
      });
  };
}

export function boundNotificationActions(dispatch) {
  return bindActionCreators(
    {
      markAsRead,
      setNotificationFilter,
      fetchNotifications,
      setLoadingState,
      setNotifications
    },
    dispatch
  );
}
