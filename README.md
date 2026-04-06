# Finance Dashboard Backend

A backend API for managing financial records with **role-based access control**, **JWT authentication**, and **dashboard analytics**.  
This system allows different users (Admin, Analyst, Viewer) to interact with financial data based on their permissions.

---

## Features

### User & Role Management
- User registration and authentication using **JWT**
- Role-based access control (RBAC)

Roles supported:
- **Admin** – full access to records and user operations
- **Analyst** – can view records and dashboard insights
- **Viewer** – can only view dashboard summaries

---

### Financial Records Management
Supports full CRUD operations for financial records.

Each record contains:

```
amount
type (income / expense)
category
date
description
```

Supported operations:
- Create financial record
- View records
- Update records
- Delete records

---

### Dashboard Analytics

Provides summary data for financial insights.

Available metrics:
- Total income
- Total expenses
- Net balance

Endpoint:

```
GET /api/dashboard/summary
```

---

## Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas
- Mongoose

**Authentication**
- JWT (jsonwebtoken)
- bcryptjs

**Validation**
- Joi

---

## Project Structure

```
finance-dashboard-backend
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── recordController.js
│   │   └── dashboardController.js
│   │
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Record.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── recordRoutes.js
│   │   └── dashboardRoutes.js
│   │
│   ├── validators
│   │   ├── authValidator.js
│   │   └── recordValidator.js
│   │
│   ├── utils
│   │   └── generateToken.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

---

## API Endpoints

### Authentication

Register user

```
POST /api/auth/register
```

Example request:

```json
{
  "name": "Admin User",
  "email": "admin@test.com",
  "password": "123456",
  "role": "admin"
}
```

Login

```
POST /api/auth/login
```

Example response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

## Financial Records

Get all records

```
GET /api/records
```

Create record

```
POST /api/records
```

Example request:

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "date": "2026-04-05",
  "description": "monthly salary"
}
```

Update record

```
PUT /api/records/:id
```

Delete record

```
DELETE /api/records/:id
```

---

## Dashboard APIs

Financial summary

```
GET /api/dashboard/summary
```

Example response:

```json
{
  "income": 5000,
  "expense": 2000,
  "balance": 3000
}
```

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Installation & Setup

Clone the repository

```
git clone https://github.com/sainadhareddy2636/finance-dashboard-backend.git
```

Navigate to project folder

```
cd finance-dashboard-backend
```

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

Server runs at

```
http://localhost:5000
```

---

## API Testing

APIs can be tested using:

- Postman

