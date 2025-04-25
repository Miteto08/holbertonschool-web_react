import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
    useSelector: jest.fn()
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
        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: [
                        { id: 1, type: "default", value: "New course available" },
                        { id: 2, type: "urgent", value: "New resume available" },
                        { id: 3, type: "urgent", html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
                    ],
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

        useSelector.mockImplementation(selector => {
            const state = {
                notifications: {
                    notifications: [
                        { id: 1, type: "default", value: "New course available" },
                        { id: 2, type: "urgent", value: "New resume available" },
                        { id: 3, type: "urgent", html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
                    ],
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
});
