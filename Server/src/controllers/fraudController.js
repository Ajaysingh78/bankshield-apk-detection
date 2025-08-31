const FraudReport = require('../models/FraudReport');

// Report a fraud incident
exports.reportFraud = async (req, res) => {
    const { userId, description } = req.body;

    try {
        const newFraudReport = new FraudReport({
            userId,
            description,
            createdAt: new Date(),
        });

        await newFraudReport.save();
        res.status(201).json({ message: 'Fraud report submitted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting fraud report.', error });
    }
};

// Get all fraud reports (admin only)
exports.getAllFraudReports = async (req, res) => {
    try {
        const reports = await FraudReport.find().populate('userId', 'username email');
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching fraud reports.', error });
    }
};