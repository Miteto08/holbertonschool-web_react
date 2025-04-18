import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import Notifications from './components/Notifications/Notifications';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import { getLatestNotification } from './utils/utils';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
import { login, logout } from './features/auth/authSlice';
import { markNotificationAsRead, showDrawer, hideDrawer, fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
    courses: `${API_BASE_URL}/courses.json`,
    notifications: `${API_BASE_URL}/notifications.json`,
};

export default function App() {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector(state => state.auth);
    const { notifications, displayDrawer } = useSelector(state => state.notifications);
    const { courses } = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchCourses());
        }
    }, [dispatch, isLoggedIn]);

    const handleDisplayDrawer = useCallback(() => {
        dispatch(showDrawer());
    }, [dispatch]);

    const handleHideDrawer = useCallback(() => {
        dispatch(hideDrawer());
    }, [dispatch]);

    const logIn = (email, password) => {
        dispatch(login({ email, password }));
    };

    const logOut = () => {
        dispatch(logout());
    };

    const handleMarkNotificationAsRead = useCallback((id) => {
        dispatch(markNotificationAsRead(id));
    }, [dispatch]);

    return (
        <>
            <Notifications
                notifications={notifications}
                handleHideDrawer={handleHideDrawer}
                handleDisplayDrawer={handleDisplayDrawer}
                displayDrawer={displayDrawer}
                markNotificationAsRead={handleMarkNotificationAsRead}
            />
            <>
                <Header user={user} logOut={logOut} />
                {!isLoggedIn ? (
                    <BodySectionWithMarginBottom title='Log in to continue'>
                        <Login login={logIn} />
                    </BodySectionWithMarginBottom>
                ) : (
                    <BodySectionWithMarginBottom title='Course list'>
                        <CourseList courses={courses} />
                    </BodySectionWithMarginBottom>
                )}
                <BodySection title="News from the School">
                    <p>Holberton School news goes here</p>
                </BodySection>
            </>
            <Footer user={user} />
        </>
    );
};

