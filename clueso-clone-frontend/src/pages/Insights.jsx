import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles } from 'lucide-react';

const Insights = () => {
    const [insights, setInsights] = useState(null);
    const [loading, setLoading] = useState(false);

    const generateInsights = async () => {
        setLoading(true);
        try {
            // Fetch all feedback first to send to AI
            const feedbackRes = await axios.get('/api/feedback');
            const messages = feedbackRes.data.map(f => f.message);

            const res = await axios.post('/api/insights', { feedbackList: messages });
            setInsights(res.data);
        } catch (err) {
            alert('Failed to generate insights');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-content center-content">
            <div className="insights-header">
                <h1><Sparkles className="icon-pulse" /> AI Insights</h1>
                <p>Analyze feedback to discover trends and sentiment.</p>
                <button onClick={generateInsights} disabled={loading} className="primary-btn ai-btn">
                    {loading ? 'Analyzing...' : 'Generate New Insights'}
                </button>
            </div>

            {insights && (
                <div className="insights-result fade-in">
                    <div className="card">
                        <h2>Summary</h2>
                        <p>{insights.summary}</p>
                    </div>

                    <div className="themes-section">
                        <h3>Common Themes</h3>
                        <div className="tags">
                            {insights.themes.map(t => <span key={t} className="tag theme-tag">#{t}</span>)}
                        </div>
                    </div>
                    <div className="timestamp">
                        Generated at: {new Date(insights.generatedAt).toLocaleString()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Insights;
