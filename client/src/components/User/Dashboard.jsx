import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <p>Welcome to the suspicious app scanner!</p>
            <div className="options">
                <Link to="/scan" className="btn">Scan a Link</Link>
                <Link to="/upload" className="btn">Upload an App</Link>
                <Link to="/history" className="btn">View Scan History</Link>
            </div>
        </div>
    );
};

export default Dashboard;