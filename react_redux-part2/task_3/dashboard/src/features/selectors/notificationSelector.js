import { createSelector } from '@reduxjs/toolkit';

const selectNotifications = state => state.notifications.notifications;

export const getFilteredNotifications = createSelector(
    [selectNotifications, (_, filter) => filter],
    (notifications, filter) => {
        if (filter === 'all') {
            return notifications;
        }

        return notifications.filter(notification => notification.type === filter);
    }
); 