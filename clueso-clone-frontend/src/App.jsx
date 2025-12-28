import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import FeedbackList from './pages/FeedbackList';
import SubmitFeedback from './pages/SubmitFeedback';
import Insights from './pages/Insights';
import Overview from './pages/Overview';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }>
        <Route index element={<Overview />} />
        <Route path="feedback" element={<FeedbackList />} />
        <Route path="submit" element={<SubmitFeedback />} />
        <Route path="insights" element={<Insights />} />
      </Route>
    </Routes>
  );
}

export default App;
