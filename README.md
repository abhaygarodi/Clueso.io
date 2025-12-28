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
The system follows a standard Client-Server architecture:

1.  **Frontend (React)**: Handles user interaction, state management (Context API), and API calls via Axios.
2.  **Backend (Express)**: Exposes RESTful endpoints, handles business logic, and manages database operations.
3.  **Database (MongoDB)**: Stores User and Feedback data.
4.  **AI Layer (Mock)**: A service layer within the backend simulating AI analysis.

### Data Flow
`User Action` -> `Frontend (React)` -> `REST API (Express)` -> `Controller Logic` -> `Database (MongoDB)`

## Assumptions & Trade-offs
-   **Browser Extension**: This MVP is built as a web application dashboard. A browser extension would be the next logical step for capturing feedback on external sites.
-   **AI Implementation**: The current AI is a strict rule-based mock for demonstration. A real implementation would connect to OpenAI/Gemini APIs.
-   **Styling**: Used custom CSS instead of a framework like Tailwind to demonstrate core CSS competency and keep dependencies low.
-   **Security**: Basic JWT auth is implemented. Production would require refresh tokens, rate limiting, and stricter CORS policies.

## Notes
- The AI insights are mocked for MVP purposes.
- Styling is done with custom CSS for a premium feel.

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
