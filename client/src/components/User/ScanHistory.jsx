import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

const ScanHistory = () => {
    const { user } = useContext(AuthContext);
    const [scanHistory, setScanHistory] = useState([]);

    useEffect(() => {
        const fetchScanHistory = async () => {
            try {
                const response = await api.get(`/scans/user/${user.id}`);
                setScanHistory(response.data);
            } catch (error) {
                console.error("Error fetching scan history:", error);
            }
        };

        if (user) {
            fetchScanHistory();
        }
    }, [user]);

    return (
        <div>
            <h2>Your Scan History</h2>
            {scanHistory.length === 0 ? (
                <p>No scan history available.</p>
            ) : (
                <ul>
                    {scanHistory.map(scan => (
                        <li key={scan.id}>
                            <p>Link: {scan.link}</p>
                            <p>Status: {scan.status}</p>
                            <p>Date: {new Date(scan.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ScanHistory;