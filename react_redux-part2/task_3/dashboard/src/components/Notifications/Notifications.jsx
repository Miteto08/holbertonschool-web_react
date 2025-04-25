import { memo, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markNotificationAsRead, fetchNotifications } from '../../features/notifications/notificationsSlice';
import { getFilteredNotifications } from '../../features/selectors/notificationSelector';
import NotificationItem from '../NotificationItem/NotificationItem';
import './Notifications.css';
import closeIcon from '../../assets/close-icon.png';

const Notifications = memo(function Notifications() {
    console.log("Rendering Notifications component");

    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications.notifications);
    const loading = useSelector((state) => state.notifications.loading);
    const error = useSelector((state) => state.notifications.error);

    const [displayDrawer, setDisplayDrawer] = useState(false);
    const [currentFilter, setCurrentFilter] = useState('all');

    const filteredNotifications = useSelector(state =>
        getFilteredNotifications(state, currentFilter)
    );

    useEffect(() => {
        if (!loading && notifications.length === 0 && !error) {
            dispatch(fetchNotifications());
        }
    }, [dispatch, loading, notifications.length, error]);

    const handleToggleDrawer = useCallback(() => {
        setDisplayDrawer(prev => !prev);
    }, []);

    const handleMarkNotificationAsRead = useCallback((id) => {
        dispatch(markNotificationAsRead(id));
    }, [dispatch]);

    const handleSetFilterUrgent = useCallback(() => {
        setCurrentFilter('urgent');
    }, []);

    const handleSetFilterDefault = useCallback(() => {
        setCurrentFilter('default');
    }, []);

    const handleSetFilterAll = useCallback(() => {
        setCurrentFilter('all');
    }, []);

    const renderNotificationContent = () => {
        if (loading) {
            return <p className="loading">Loading notifications...</p>;
        }

        if (error) {
            return <p className="error">Error loading notifications: {error}</p>;
        }

        if (filteredNotifications.length === 0) {
            return <p>No new notifications for now</p>;
        }

        return (
            <>
                <p>Here is the list of notifications</p>
                <div className="filter-buttons">
                    <button
                        onClick={handleSetFilterAll}
                        className={currentFilter === 'all' ? 'active' : ''}
                    >
                        All
                    </button>
                    <button
                        onClick={handleSetFilterUrgent}
                        className={currentFilter === 'urgent' ? 'active' : ''}
                    >
                        ‼️
                    </button>
                    <button
                        onClick={handleSetFilterDefault}
                        className={currentFilter === 'default' ? 'active' : ''}
                    >
                        ??
                    </button>
                </div>
                <button onClick={handleToggleDrawer} aria-label="Close" className="close-button">
                    <img src={closeIcon} alt="close icon" />
                </button>
                <ul>
                    {filteredNotifications.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            id={notification.id}
                            type={notification.type}
                            value={notification.value}
                            markAsRead={handleMarkNotificationAsRead}
                        />
                    ))}
                </ul>
            </>
        );
    };

    return (
        <>
            <div className="notification-title" onClick={handleToggleDrawer}>
                Your notifications
            </div>
            <div className={`Notifications ${displayDrawer ? 'visible' : ''}`}>
                {renderNotificationContent()}
            </div>
        </>
    );
});

export default Notifications;
