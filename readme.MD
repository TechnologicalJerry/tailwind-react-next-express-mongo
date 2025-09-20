# tailwind-react-next-express-mongo

A full-stack project template utilizing React, Next.js, Express, MongoDB, and Tailwind CSS for modern web applications.

## Table of Contents

- Features
- Tech Stack
- Prerequisites
- Installation
- Environment Variables
- Running the Application
- Project Structure
- Usage
- Deployment
- License

## Features

- Next.js SSR/SSG with React functional components and hooks[web:9]
- Express-based backend API with REST endpoints
- MongoDB integration via Mongoose ORM
- Tailwind CSS styling for rapid UI creation
- API routes for client-server communication
- Environment-based configuration
- Hot-reload for development

## Tech Stack

| Name         | Version/Notes | Role in Project   |
| ------------ | ------------- | ----------------- |
| React        | 19+/Latest    | UI/Frontend       |
| Next.js      | 15+/Latest    | SSR/SSG, Routing  |
| Tailwind CSS | 4+/Latest     | Frontend Styling  |
| Express.js   | 5+/Latest     | Backend API Layer |
| MongoDB      | Atlas/Local   | Database          |
| Mongoose     | 8+/Latest     | ODM for MongoDB   |

## Prerequisites

- Node.js v16+ and npm/yarn installed[web:2]
- MongoDB instance (local or Atlas cluster)[web:2]
- Git client

## Installation

Clone the repo:

git clone https://github.com/technologicaljerry/tailwind-react-next-express-mongo.git
cd tailwind-react-next-express-mongo

## Install dependencies for both frontend and backend:

cd backend
npm install
cd ../frontend
npm install

## Environment Variables

Configure **backend/.env**:

MONGODB_URI=your-mongodb-atlas-url
PORT=5000

Configure **frontend/.env.local** (if required for API URLs):

NEXT_PUBLIC_API_URL=http://localhost:5000

## Running the Application

Start the backend server:

cd backend
npm run dev

Start the frontend Next.js app:

cd frontend
npm run dev

Visit http://localhost:3000 to view the frontend. The API runs on http://localhost:5000[web:2].

## Project Structure

tailwind-react-next-express-mongo/
│
├── express-server/ # Express & Mongoose server
│ ├── models/ # Database schema models
│ ├── routes/ # Express routes
│ ├── controllers/ # Request logic
│ ├── .env # Backend environment
│ └── server.js # Entry point
│
├── react-client/ # Next.js React client
│ ├── pages/ # Next.js routes
│ ├── components/ # Reusable UI
│ ├── styles/ # Tailwind config
│ └── .env.local # Frontend environment
│
└── README.md # Project info

## Usage

- Create, read, update, and delete resources from the MongoDB database using REST APIs[web:2][web:7].
- Styled components and UI flows powered by Tailwind CSS[web:3].
- Supports SSR and SSG for SEO.

## Deployment

- Frontend can be deployed to Vercel for best Next.js support.
- Backend can deploy to Heroku, Fly.io, or a Node-friendly PaaS.
- Use environment variables for production secrets.

## License

MIT License[web:2]
