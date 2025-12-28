import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                                <span className="date">{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
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
