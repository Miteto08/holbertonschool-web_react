import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import * as notificationSelector from '../../features/selectors/notificationSelector';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
    useSelector: jest.fn()
}));

jest.mock('../../features/selectors/notificationSelector', () => ({
    getFilteredNotifications: jest.fn()
}));

import { useSelector, useDispatch } from 'react-redux';

describe('Notifications', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: [],
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        notificationSelector.getFilteredNotifications.mockReturnValue([]);
    });

    it('Should render without crashing', () => {
        render(<Notifications />);
        expect(screen.getByText('Your notifications')).toBeInTheDocument();
    });

    it('Should render loading state', () => {
        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: [],
                    loading: true,
                    error: null
                }
            };
            return selector(state);
        });

        render(<Notifications />);
        expect(screen.getByText('Loading notifications...')).toBeInTheDocument();
        expect(screen.getByText('Loading notifications...').className).toBe('loading');
    });

    it('Should render error state', () => {
        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: [],
                    loading: false,
                    error: 'Failed to fetch notifications'
                }
            };
            return selector(state);
        });

        render(<Notifications />);
        expect(screen.getByText(/Error loading notifications:/)).toBeInTheDocument();
        expect(screen.getByText(/Error loading notifications:/).className).toBe('error');
    });

    it('Should toggle drawer on click', () => {
        render(<Notifications />);

        const drawer = screen.getByText(/no new notifications for now/i).closest('.Notifications');
        expect(drawer).not.toHaveClass('visible');

        fireEvent.click(screen.getByText(/your notifications/i));
        expect(drawer).toHaveClass('visible');

        fireEvent.click(screen.getByText(/your notifications/i));
        expect(drawer).not.toHaveClass('visible');
    });

    it('Should close drawer on close button', () => {
        const mockNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" }
        ];

        notificationSelector.getFilteredNotifications.mockReturnValue(mockNotifications);

        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: mockNotifications,
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        const { container } = render(<Notifications />);

        fireEvent.click(screen.getByText(/your notifications/i));
        const drawer = container.querySelector('.Notifications');
        expect(drawer).toHaveClass('visible');

        fireEvent.click(screen.getByRole('button', { name: /close/i }));
        expect(drawer).not.toHaveClass('visible');
    });

    it('Should mark notification as read', () => {
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);

        const mockNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" }
        ];

        notificationSelector.getFilteredNotifications.mockReturnValue(mockNotifications);

        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: mockNotifications,
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        render(<Notifications />);

        fireEvent.click(screen.getByText(/your notifications/i));
        fireEvent.click(screen.getByText('New course available'));

        expect(mockDispatch).toHaveBeenCalled();
    });

    it('Should filter notifications when filter buttons are clicked', () => {
        const mockNotifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" }
        ];

        notificationSelector.getFilteredNotifications.mockReturnValue(mockNotifications);

        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: mockNotifications,
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        render(<Notifications />);

        fireEvent.click(screen.getByText(/your notifications/i));

        expect(screen.getByText('‼️')).toBeInTheDocument();
        expect(screen.getByText('??')).toBeInTheDocument();

        fireEvent.click(screen.getByText('‼️'));
        expect(notificationSelector.getFilteredNotifications).toHaveBeenCalled();

        fireEvent.click(screen.getByText('??'));
        expect(notificationSelector.getFilteredNotifications).toHaveBeenCalled();

        fireEvent.click(screen.getByText('All'));
        expect(notificationSelector.getFilteredNotifications).toHaveBeenCalled();
    });
});
