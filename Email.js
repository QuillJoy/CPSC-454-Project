import React, { useState } from 'react';
import axios from 'axios';

const EmailNotificationForm = () => {
    const [recipientEmail, setRecipientEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendNotification = async () => {
        try {
            const response = await axios.post('http://localhost:5000/send-notification', {
                recipientEmail,
                subject,
                message
            });
            setStatus(response.data.message);
        } catch (error) {
            setStatus('Error: Unable to send notification');
        }
    };

    return (
        <div>
            <h2>Email Notification</h2>
            <input
                type="email"
                placeholder="Recipient Email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={sendNotification}>Send Notification</button>
            <p>{status}</p>
        </div>
    );
};

export default EmailNotificationForm;
