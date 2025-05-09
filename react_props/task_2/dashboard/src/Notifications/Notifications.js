import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem';

function Notifications() {
    const handleClose = () => {
        console.log('Close button has been clicked')
    }
    return (
        <div className="Notifications">
            <button
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'transparent',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer'
                }}
                aria-label="Close"
                onClick={handleClose}
            >
                x
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}

export default Notifications;