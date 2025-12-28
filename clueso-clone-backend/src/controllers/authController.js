const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

/**
 * Register a new user
 * @route POST /api/auth/signup
 * @access Public
 */
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide all fields' });
        }

        // Check for existing user
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user (password hashing handled in Model pre-save hook)
        user = await User.create({ email, password });

        // Return JWT for immediate login
        res.status(201).json({
            _id: user.id,
            email: user.email,
            token: generateToken(user.id),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/**
 * Authenticate user and get token
 * @route POST /api/auth/login
 * @access Public
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password match
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Return token
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user.id),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
