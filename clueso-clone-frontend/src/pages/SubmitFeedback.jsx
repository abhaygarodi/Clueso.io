import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitFeedback = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('general');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback', { title, message, category });
            navigate('/feedback');
        } catch (err) {
            console.error('Feedback submission error:', err);
            alert(`Failed to submit feedback: ${err.response?.data?.message || err.message}`);
        }
    };

    return (
        <div className="page-content center-content">
            <h1>Submit Feedback</h1>
            <form onSubmit={handleSubmit} className="card form-card">
                <label>Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Short summary"
                />

                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                </select>

                <label>Details</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Describe your feedback..."
                />

                <button type="submit" className="primary-btn">Submit</button>
            </form>
        </div>
    );
};

export default SubmitFeedback;
