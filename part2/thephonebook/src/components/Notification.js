import React from "react";
const Notification = ({ notificationType, notificationContent }) => {
    const successStyle = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };
    const errorStyle = {
        color: "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };
    let notification = null;
    switch (notificationType) {
        case "success":
            notification = (
                <div style={successStyle}>{notificationContent}</div>
            );
            break;
        case "error":
            notification = <div style={errorStyle}>{notificationContent}</div>;
            break;
        default:
            console.log('No notification');
    }
    return notification;
};
export default Notification;
