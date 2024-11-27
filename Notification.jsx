import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, CircularProgress } from '@mui/material';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('/api/notifications'); // Update with your API endpoint
                setNotifications(response.data);
            } catch (err) {
                console.error('Error fetching notifications:', err); // Log the error for debugging
                setError(err.response ? err.response.data.message : 'Failed to fetch notifications');
            } finally {
                setLoading(false);
            }
        };
    
        fetchNotifications();
    }, []);
    

    return (
        <div style={{ padding: '10px' }}>
            <Typography variant="h6" gutterBottom>
                Notifications
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {notifications.length === 0 ? (
                        <Typography variant="body1">No notifications</Typography>
                    ) : (
                        notifications.map((notification, index) => (
                            <li key={index}>
                                <Typography
                                    variant="body1"
                                    color={notification.type === 'error' ? 'error' : 'primary'}
                                >
                                    {notification.message}
                                </Typography>
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};

export default Notification;
