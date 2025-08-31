import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubmissionsList from './SubmissionsList';

const Dashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get('/api/admin/submissions');
                setSubmissions(response.data);
            } catch (error) {
                console.error('Error fetching submissions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Submissions Overview</h2>
            <SubmissionsList submissions={submissions} />
        </div>
    );
};

export default Dashboard;