import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BarChart, Users, MessageSquare, AlertCircle } from 'lucide-react';

const Overview = () => {
    const [stats, setStats] = useState({ total: 0, bugs: 0, features: 0 });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('/api/feedback');
                const feedback = res.data;
                const bugs = feedback.filter(f => f.category === 'bug').length;
                const features = feedback.filter(f => f.category === 'feature').length;
                setStats({
                    total: feedback.length,
                    bugs,
                    features
                });
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) return <div>Loading overview...</div>;

    return (
        <div className="page-content">
            <h1>Dashboard Overview</h1>
            <p className="subtitle">Welcome back! Here is a summary of your product feedback.</p>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="icon-bg purple"><MessageSquare size={24} /></div>
                    <div className="stat-info">
                        <h3>Total Feedback</h3>
                        <p className="stat-value">{stats.total}</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="icon-bg red"><AlertCircle size={24} /></div>
                    <div className="stat-info">
                        <h3>Bugs Reported</h3>
                        <p className="stat-value">{stats.bugs}</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="icon-bg blue"><BarChart size={24} /></div>
                    <div className="stat-info">
                        <h3>Features Requested</h3>
                        <p className="stat-value">{stats.features}</p>
                    </div>
                </div>
            </div>

            <div className="card overview-chart">
                <h2>Quick Actions</h2>
                <div className="actions-row">
                    <button onClick={() => navigate('/dashboard/submit')} className="secondary-btn">Submit New Feedback</button>
                    <button onClick={() => navigate('/dashboard/insights')} className="secondary-btn">Generate Insights</button>
                </div>
            </div>
        </div>
    );
};

export default Overview;
