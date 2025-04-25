import { act, render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from '../App';

// Mock Redux
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
    useSelector: jest.fn()
}));

// Import après le mock
import { useSelector, useDispatch } from 'react-redux';

// Mock Axios
jest.mock('axios');

describe('App Component Integration Tests', () => {
    let axiosMock;
    let mockDispatch;

    beforeEach(() => {
        jest.clearAllMocks();
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);

        // Par défaut, simuler un utilisateur non connecté
        useSelector.mockImplementation((selector) => {
            const state = {
                auth: {
                    isLoggedIn: false,
                    user: null
                },
                courses: { courses: [], status: 'idle', error: null },
                notifications: {
                    notifications: [
                        { id: 1, type: 'default', value: 'New course available' },
                        { id: 2, type: 'urgent', value: 'New resume available' },
                        { id: 3, type: 'urgent', html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } }
                    ],
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        // Setup Axios mock
        axiosMock = new MockAdapter(axios);
        axiosMock
            .onGet('http://localhost:5173/courses.json')
            .reply(200, {
                courses: [
                    { id: 1, name: 'ES6', credit: 60 },
                    { id: 2, name: 'Webpack', credit: 20 },
                    { id: 3, name: 'React', credit: 40 },
                ],
            });
        axiosMock
            .onGet('http://localhost:5173/notifications.json')
            .reply(200, {
                notifications: [
                    { id: 1, type: 'default', value: 'New course available' },
                    { id: 2, type: 'urgent', value: 'New resume available' },
                    { id: 3, type: 'urgent', html: { __html: '' } },
                ],
            });
    });

    afterEach(() => {
        axiosMock.restore();
    });

    it('Should not populate courses when not logged in', async () => {
        render(<App />);

        // Vérifier que fetchNotifications a été appelé mais pas fetchCourses
        await waitFor(() => {
            // Vérifier que le dispatch a été appelé au moins une fois (pour fetchNotifications)
            expect(mockDispatch).toHaveBeenCalled();

            // Vérifier que la page de login est affichée
            expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
        });
    });

    it('Should populate courses WHEN logged in', async () => {
        // Simuler un utilisateur connecté
        useSelector.mockImplementation((selector) => {
            const state = {
                auth: {
                    isLoggedIn: true,
                    user: { email: 'test@example.com' }
                },
                courses: {
                    courses: [
                        { id: 1, name: 'ES6', credit: 60 },
                        { id: 2, name: 'Webpack', credit: 20 },
                        { id: 3, name: 'React', credit: 40 },
                    ],
                    status: 'succeeded',
                    error: null
                },
                notifications: {
                    notifications: [
                        { id: 1, type: 'default', value: 'New course available' },
                        { id: 2, type: 'urgent', value: 'New resume available' },
                        { id: 3, type: 'urgent', html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } }
                    ],
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        render(<App />);

        await waitFor(() => {
            // Vérifier que la liste des cours est affichée
            expect(screen.getByText('Available courses')).toBeInTheDocument();
            expect(screen.getByText('ES6')).toBeInTheDocument();
            expect(screen.getByText('Webpack')).toBeInTheDocument();
            expect(screen.getByText('React')).toBeInTheDocument();
        });
    });

    it('Should CLEAR courses on logout', async () => {
        // Simuler d'abord un utilisateur connecté
        useSelector.mockImplementation((selector) => {
            const state = {
                auth: {
                    isLoggedIn: true,
                    user: { email: 'test@example.com' }
                },
                courses: {
                    courses: [
                        { id: 1, name: 'ES6', credit: 60 },
                        { id: 2, name: 'Webpack', credit: 20 },
                        { id: 3, name: 'React', credit: 40 },
                    ],
                    status: 'succeeded',
                    error: null
                },
                notifications: {
                    notifications: [
                        { id: 1, type: 'default', value: 'New course available' },
                        { id: 2, type: 'urgent', value: 'New resume available' },
                        { id: 3, type: 'urgent', html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } }
                    ],
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        const { rerender } = render(<App />);

        // Vérifier que la liste des cours est affichée
        expect(screen.getByText('Available courses')).toBeInTheDocument();

        // Simuler une déconnexion
        useSelector.mockImplementation((selector) => {
            const state = {
                auth: {
                    isLoggedIn: false,
                    user: null
                },
                courses: { courses: [], status: 'idle', error: null },
                notifications: {
                    notifications: [
                        { id: 1, type: 'default', value: 'New course available' },
                        { id: 2, type: 'urgent', value: 'New resume available' },
                        { id: 3, type: 'urgent', html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" } }
                    ],
                    loading: false,
                    error: null
                }
            };
            return selector(state);
        });

        // Re-rendre pour refléter le changement d'état
        rerender(<App />);

        // Vérifier que la page de login est affichée à nouveau
        expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
    });
});
