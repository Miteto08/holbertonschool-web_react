import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CourseList from './CourseList';
import coursesSlice, { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice';
import authSlice, { login, logout } from '../../features/auth/authSlice';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
}));

import { useDispatch } from 'react-redux';

describe('CourseList', () => {
    let store;
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);

        store = configureStore({
            reducer: {
                courses: coursesSlice,
                auth: authSlice,
            },
        });
    });

    it('Should render without crashing', () => {
        render(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );
        expect(screen.getByText('No course available yet')).toBeInTheDocument();
    });

    it('Should displays the list of courses', () => {
        store = configureStore({
            reducer: {
                courses: coursesSlice,
                auth: authSlice,
            },
            preloadedState: {
                courses: {
                    courses: [
                        { "id": 1, "name": "ES6", "credit": 60 },
                        { "id": 2, "name": "Webpack", "credit": 20 },
                        { "id": 3, "name": "React", "credit": 40 }
                    ],
                },
            },
        });
        render(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );
        expect(screen.getByText('ES6')).toBeInTheDocument();
        expect(screen.getByText('Webpack')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('Should dispatch selectCourse when checkbox is checked', () => {
        store = configureStore({
            reducer: {
                courses: coursesSlice,
                auth: authSlice,
            },
            preloadedState: {
                courses: {
                    courses: [
                        { "id": 1, "name": "ES6", "credit": 60, isSelected: false },
                    ],
                },
            },
        });

        render(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );

        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);

        expect(mockDispatch).toHaveBeenCalledWith(selectCourse(1));
    });

    it('Should dispatch unSelectCourse when checkbox is unchecked', () => {
        store = configureStore({
            reducer: {
                courses: coursesSlice,
                auth: authSlice,
            },
            preloadedState: {
                courses: {
                    courses: [
                        { "id": 1, "name": "ES6", "credit": 60, isSelected: true },
                    ],
                },
            },
        });

        render(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );

        const checkbox = screen.getByRole('checkbox');

        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);

        expect(mockDispatch).toHaveBeenCalledWith(unSelectCourse(1));
    });

    it('Should clear courses on logout', () => {
        store = configureStore({
            reducer: {
                courses: coursesSlice,
                auth: authSlice,
            },
            preloadedState: {
                courses: {
                    courses: [
                        { "id": 1, "name": "ES6", "credit": 60 },
                        { "id": 2, "name": "Webpack", "credit": 20 },
                        { "id": 3, "name": "React", "credit": 40 }
                    ],
                },
            },
        });
        render(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );
        store.dispatch(logout());
        expect(store.getState().courses.courses).toHaveLength(0);
    });

    it('Should load courses on login', () => {
        store = configureStore({
            reducer: {
                courses: coursesSlice,
                auth: authSlice,
            },
        });
        render(
            <Provider store={store}>
                <CourseList />
            </Provider>
        );
        store.dispatch(login({
            email: 'test@example.com',
            password: 'password123'
        }));
        expect(store.getState().courses.courses).toHaveLength(0);
    });
});
