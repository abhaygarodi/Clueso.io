import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';

const FeedbackList = () => {
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const res = await axios.get('/api/feedback');
            setFeedback(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation(); // Prevent card clicks if we add detail view later
        if (!window.confirm('Are you sure you want to delete this feedback?')) return;

        try {
            await axios.delete(`/api/feedback/${id}`);
            setFeedback(feedback.filter(item => item._id !== id));
        } catch (err) {
            console.error('Delete error:', err);
            alert(`Failed to delete feedback: ${err.response?.data?.message || err.message}`);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="page-content">
            <h1>Feedback History</h1>
            <div className="feedback-grid">
                {feedback.length === 0 ? (
                    <p>No feedback submitted yet.</p>
                ) : (
                    feedback.map((item) => (
                        <div key={item._id} className="card feedback-card">
                            <div className="card-header">
                                <span className={`tag ${item.category}`}>{item.category}</span>
                                <button
                                    onClick={(e) => handleDelete(item._id, e)}
                                    className="icon-btn delete-btn"
                                    title="Delete Feedback"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <span className="date">{new Date(item.createdAt).toLocaleDateString()}</span>
                            <h3>{item.title}</h3>
                            <p>{item.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FeedbackList;
