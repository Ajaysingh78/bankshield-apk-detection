import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed


// Function to scan a link
export const scanLink = async (link) => {
    try {
        const response = await axios.post(`${API_URL}/scan/link`, { link });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


// Function to upload a file for scanning
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(`${API_URL}/scan/file`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


// Function to get user scan history
export const getScanHistory = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/scan/history/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Function to report fraud
export const reportFraud = async (fraudData) => {
    try {
        const response = await axios.post(`${API_URL}/admin/report-fraud`, fraudData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};