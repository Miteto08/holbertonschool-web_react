import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Notifications from './Notifications';
import notificationsSlice from '../../features/notifications/notificationsSlice';

describe('Notifications', () => {
    let store;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                notifications: notificationsSlice,
            },
            preloadedState: {
                notifications: {
                    notifications: []
                }
            }
        });
    });

    it('Should render without crashing', () => {
        render(
            <Provider store={store}>
                <Notifications />
            </Provider>
        );
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
    });

    it('Should toggle drawer on click', () => {
        render(
            <Provider store={store}>
                <Notifications />
            </Provider>
        );
        const drawer = screen.getByText(/no new notifications for now/i).closest('.Notifications');
        expect(drawer).toHaveClass('visible');

        fireEvent.click(screen.getByText(/your notifications/i));
        expect(drawer).not.toHaveClass('visible');

        fireEvent.click(screen.getByText(/your notifications/i));
        expect(drawer).toHaveClass('visible');
    });

    it('Should close drawer on close button', () => {
        store = configureStore({
            reducer: {
                notifications: notificationsSlice,
            },
            preloadedState: {
                notifications: {
                    notifications: [
                        { id: 1, type: "default", value: "New course available" },
                        { id: 2, type: "urgent", value: "New resume available" },
                        { id: 3, type: "urgent", html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
                    ]
                }
            }
        });
        render(
            <Provider store={store}>
                <Notifications />
            </Provider>
        );

        const drawer = screen.getByText(/here is the list of notifications/i).closest('.Notifications');
        expect(drawer).toHaveClass('visible');

        fireEvent.click(screen.getByRole('button', { name: /close/i }));
        expect(drawer).not.toHaveClass('visible');
    });

    it('Should mark notification as read', () => {
        store = configureStore({
            reducer: {
                notifications: notificationsSlice,
            },
            preloadedState: {
                notifications: {
                    notifications: [
                        { id: 1, type: "default", value: "New course available" },
                        { id: 2, type: "urgent", value: "New resume available" },
                        { id: 3, type: "urgent", html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
                    ]
                }
            }
        });
        render(
            <Provider store={store}>
                <Notifications />
            </Provider>
        );
        fireEvent.click(screen.getByText('New course available'));
        const state = store.getState().notifications;
        expect(state.notifications).toEqual([
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
        ]);
    });
});
