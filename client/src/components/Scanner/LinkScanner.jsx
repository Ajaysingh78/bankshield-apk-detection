import React, { useState } from 'react';
import axios from 'axios';

const LinkScanner = () => {
    const [link, setLink] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleScan = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const response = await axios.post('/api/scan/link', { link });
            setResult(response.data);
        } catch (err) {
            setError('Error scanning the link. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Link Scanner</h2>
            <form onSubmit={handleScan}>
                <input 
                    type="text" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                    placeholder="Paste your link here" 
                    required 
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Scanning...' : 'Scan Link'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && (
                <div>
                    <h3>Scan Result:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default LinkScanner;