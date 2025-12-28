const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
    try {
        const { title, message, category } = req.body;

        const feedback = await Feedback.create({
            user: req.user.id,
            title,
            message,
            category
        });

        res.status(201).json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
