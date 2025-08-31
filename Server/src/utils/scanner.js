const axios = require('axios');
const { Scan } = require('../models/Scan');

const scanLink = async (link) => {
    try {
        const response = await axios.get(link);
        // Perform scanning logic here
        const scanResult = {
            url: link,
            status: response.status,
            data: response.data,
        };
        return scanResult;
    } catch (error) {
        throw new Error('Error scanning the link: ' + error.message);
    }
};

const saveScanResult = async (scanData) => {
    try {
        const scan = new Scan(scanData);
        await scan.save();
        return scan;
    } catch (error) {
        throw new Error('Error saving scan result: ' + error.message);
    }
};

module.exports = {
    scanLink,
    saveScanResult,
};