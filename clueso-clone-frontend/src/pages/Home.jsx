import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle, BarChart3, MessageSquare, Sparkles } from 'lucide-react';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="landing-page">
            <section className="hero">
                <div className="container">
                    <h1>Turn Customer Feedback into <span>Actionable Insights</span></h1>
                    <p>Collect, organize, and analyze product feedback with AI-powered insights. Build faster what your users actually need.</p>
                    <div className="cta-group">
                        {user ? (
                            <Link to="/dashboard" className="hero-btn-primary">Go to Dashboard</Link>
                        ) : (
                            <>
                                <Link to="/signup" className="hero-btn-primary">Start for Free</Link>
                                <Link to="/login" className="hero-btn-secondary">View Demo</Link>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Everything you need to master user feedback</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <MessageSquare className="feature-icon" size={32} />
                            <h3>Centralized Feedback</h3>
                            <p>Capture feedback from any source in one clean, organized dashboard.</p>
                        </div>
                        <div className="feature-card">
                            <Sparkles className="feature-icon" size={32} />
                            <h3>AI-Powered Insights</h3>
                            <p>Our AI automatically themes and summarizes hundreds of feedback entries.</p>
                        </div>
                        <div className="feature-card">
                            <BarChart3 className="feature-icon" size={32} />
                            <h3>Data-Driven Decisions</h3>
                            <p>Visualize what features are most requested and which bugs are critical.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="social-proof">
                <div className="container">
                    <p className="trust-text">Trusted by 0+ innovative product teams (it's a clone!)</p>
                </div>
            </section>

            <footer className="landing-footer">
                <div className="container">
                    <p>&copy; 2025 Clueso Clone. Built for demonstration.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
