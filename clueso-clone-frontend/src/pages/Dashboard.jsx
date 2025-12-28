import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LogOut, Home, MessageSquare, PlusCircle, Sparkles } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="logo">Clueso Clone</div>
                <nav>
                    <Link to="/" className="nav-item"><Home size={20} /> Overview</Link>
                    <Link to="/feedback" className="nav-item"><MessageSquare size={20} /> Feedback</Link>
                    <Link to="/submit" className="nav-item"><PlusCircle size={20} /> Submit</Link>
                    <Link to="/insights" className="nav-item"><Sparkles size={20} /> AI Insights</Link>
                </nav>
                <div className="user-info">
                    <p>{user?.email}</p>
                    <button onClick={handleLogout} className="logout-btn"><LogOut size={16} /> Logout</button>
                </div>
            </aside>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
