# Task Management System

## Overview

This is a full-stack Task Management System built using React.js, Node.js, Express.js, MongoDB, and JWT Authentication. The application allows users to register, log in, and manage their tasks through a protected dashboard.

## Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Routes

### Task Management

* Create Task
* View Tasks
* Update Task
* Delete Task

### Security

* Password Encryption
* JWT Token Verification
* Protected Dashboard Access

### API Versioning

* /api/v1/users
* /api/v1/tasks

## Project Structure

backend/

* config
* controllers
* middleware
* models
* routes
* utils

frontend/

* pages
* App.jsx
* main.jsx

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### User Routes

POST /api/v1/users/register

POST /api/v1/users/login

GET /api/v1/users/profile

### Task Routes

POST /api/v1/tasks

GET /api/v1/tasks

PUT /api/v1/tasks/:id

DELETE /api/v1/tasks/:id

## Database

MongoDB Atlas

Collections:

* Users
* Tasks

## Scalability Note

The project follows a modular structure with separate controllers, routes, middleware, and models. This makes it easier to maintain and extend in the future.

Possible improvements:

* Redis caching
* Docker deployment
* Load balancing
* Microservices architecture

## Author

Nazmul
