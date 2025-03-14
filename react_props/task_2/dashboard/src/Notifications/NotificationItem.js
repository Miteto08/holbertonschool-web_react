import React from "react";

function NotificationItem({ type, value, html }) {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    )
}

export default NotificationItem