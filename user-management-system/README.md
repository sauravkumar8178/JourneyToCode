# User Management System

This project is a User Management System that allows users to manage their own personal details, including contact information. The system is built using Node.js with Sequelize ORM for PostgreSQL database management, and React.js for the frontend.

## Features

- **User Authentication**: Secure user login and registration.
- **User Profile Management**: Users can view and update their profile details and contact information.
- **Contact Details Management**: Users can add, edit, and delete contact details.
- **Responsive UI**: Built with React.js for a smooth and responsive user experience.

## Tech Stack

- **Backend**:
  - Node.js
  - Sequelize ORM
  - PostgreSQL
  - Express.js
  - JWT for authentication
- **Frontend**:
  - React.js
  - Axios for API calls
  - React Router for routing
- **Dev Tools**:
  - Postman for API testing
  - Nodemon for development server auto-reload

## Installation

### Backend (Node.js)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```bash
   DB_HOST=localhost
   DB_USER=your-db-username
   DB_PASSWORD=your-db-password
   DB_NAME=your-db-name
   JWT_SECRET=your-jwt-secret
   ```

4. Run the migrations to set up the database:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend (React.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be running on `http://localhost:3000` and will communicate with the backend at `http://localhost:5000` (or whatever port you have set for the backend).

## Usage

1. Register a new account or log in using existing credentials.
2. Once logged in, you can view and update your personal details, including your contact information.
3. The system supports managing multiple contact entries with CRUD (Create, Read, Update, Delete) functionality.

