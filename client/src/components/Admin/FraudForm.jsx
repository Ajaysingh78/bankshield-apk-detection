import React, { useState } from 'react';
import axios from 'axios';

const FraudForm = () => {
    const [description, setDescription] = useState('');
    const [appLink, setAppLink] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/api/admin/report-fraud', {
                description,
                appLink,
            });
            setSuccess('Fraud report submitted successfully!');
            setDescription('');
            setAppLink('');
        } catch (err) {
            setError('Failed to submit fraud report. Please try again.');
        }
    };

    return (
        <div>
            <h2>Report Fraud</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="appLink">App Link:</label>
                    <input
                        type="url"
                        id="appLink"
                        value={appLink}
                        onChange={(e) => setAppLink(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Report</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default FraudForm;