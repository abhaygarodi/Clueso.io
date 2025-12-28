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

exports.deleteFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);

        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        // Check user ownership
        if (feedback.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await feedback.deleteOne();
        res.json({ message: 'Feedback removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
