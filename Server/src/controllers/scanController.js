const Scan = require('../models/Scan');
const { scanFile, scanLink } = require('../utils/scanner');

// Function to handle file scanning
exports.scanFile = async (req, res) => {
    try {
        const file = req.file; // Assuming file is uploaded using multer
        const scanResult = await scanFile(file);
        
        const newScan = new Scan({
            userId: req.user.id,
            type: 'file',
            result: scanResult,
            createdAt: new Date()
        });

        await newScan.save();
        res.status(200).json({ message: 'File scanned successfully', result: scanResult });
    } catch (error) {
        res.status(500).json({ message: 'Error scanning file', error: error.message });
    }
};

// Function to handle link scanning
exports.scanLink = async (req, res) => {
    try {
        const { link } = req.body;
        const scanResult = await scanLink(link);
        
        const newScan = new Scan({
            userId: req.user.id,
            type: 'link',
            result: scanResult,
            createdAt: new Date()
        });

        await newScan.save();
        res.status(200).json({ message: 'Link scanned successfully', result: scanResult });
    } catch (error) {
        res.status(500).json({ message: 'Error scanning link', error: error.message });
    }
};

// Function to get scan history for a user
exports.getScanHistory = async (req, res) => {
    try {
        const scans = await Scan.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(scans);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching scan history', error: error.message });
    }
};