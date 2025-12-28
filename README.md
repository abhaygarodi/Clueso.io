# Clueso.io Clone

A full-stack feedback and insights platform built as an MVP.

## Features
- **Authentication**: Signup, Login, JWT-based sessions.
- **Overview Dashboard**: Visual statistics of total feedback and breakdown by category.
- **Feedback**: Submit and list product feedback.
- **AI Insights**: Generate summary and themes from feedback (Mock AI).
- **Responsive UI**: Clean, modern interface.

## Tech Stack
- **Frontend**: React, Vite, CSS Modules (Vanilla), Axios, React Router.
- **Backend**: Node.js, Express, MongoDB (Mongoose).
- **Security**: BCrypt for passwords, Helmet for headers, JWT for auth.

## Architecture
- `clueso-clone-frontend`: React Client.
- `clueso-clone-backend`: REST API Server.

## Setup & Run

### Prerequisites
- Node.js (v14+)
- MongoDB (Running locally on default port 27017)

### Backend
1. `cd clueso-clone-backend`
2. `npm install`
3. `npm start`
   - Server runs on http://localhost:5000

### Frontend
1. `cd clueso-clone-frontend`
2. `npm install`
3. `npm run dev`
   - App runs on http://localhost:5173

## API Endpoints
- POST `/api/auth/signup`: Create account
- POST `/api/auth/login`: Login
- POST `/api/feedback`: Submit feedback
- GET `/api/feedback`: Get user feedback
- POST `/api/insights`: Generate AI insights

## Notes
- The AI insights are mocked for MVP purposes.
- Styling is done with custom CSS for a premium feel.
