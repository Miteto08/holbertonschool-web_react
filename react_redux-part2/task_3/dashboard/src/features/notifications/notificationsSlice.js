import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    notifications: [],
    loading: false,
    error: null
};

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
    notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async () => {
        const response = await axios.get(ENDPOINTS.notifications);

        const data = response.data.notifications || response.data;

        const unreadNotifications = data
            .filter(notification => notification.context ? !notification.context.isRead : true)
            .map(notification => {
                if (notification.context) {
                    return {
                        id: notification.id,
                        type: notification.context.type,
                        value: notification.context.value,
                        isRead: notification.context.isRead
                    };
                }
                return notification;
            });

        return unreadNotifications;
    }
);

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        markNotificationAsRead: (state, action) => {
            const notificationId = action.payload;
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== notificationId
            );
            console.log(`Notification ${notificationId} has been marked as read`);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.notifications = action.payload;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { markNotificationAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
