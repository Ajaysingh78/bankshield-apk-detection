import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionsList = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get('/api/admin/submissions');
                setSubmissions(response.data);
            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };

        fetchSubmissions();
    }, []);

    return (
        <div>
            <h2>User Submissions</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Submission</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission) => (
                        <tr key={submission._id}>
                            <td>{submission.user}</td>
                            <td>{submission.link || submission.fileName}</td>
                            <td>{submission.status}</td>
                            <td>{new Date(submission.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionsList;