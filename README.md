# Token Orchestrator

Token Orchestrator is a backend service built using Node.js, Express, and MongoDB for managing token issuance, refresh, and validation. This service is designed to handle the generation, storage, and orchestration of secure tokens (JWTs) across multiple clients or services.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

## Features

- JWT token generation and management (access and refresh tokens)
- Secure token storage using MongoDB
- Refresh token mechanism to keep sessions active
- Token validation and revocation
- Modular and scalable code structure with controllers, routes, and utilities

## Technologies Used

- **Node.js**: JavaScript runtime environment for server-side development
- **Express.js**: Fast, minimalist web framework for Node.js
- **MongoDB**: NoSQL database for storing token information
- **Mongoose**: Object data modeling (ODM) library for MongoDB
- **JWT (JSON Web Tokens)**: Token-based authentication and authorization
- **Bcrypt**: Password hashing for enhanced security

## Project Structure

The project follows a modular structure to ensure scalability and maintainability.

```
Token-Orchestrator/
├── src/
│   ├── Controllers/         # Handles the business logic
│   ├── Routes/              # Defines API routes
│   ├── Models/              # Database models (e.g., Token model)
│   ├── Utils/               # Utility functions (e.g., token generation)
│   ├── app.js               # Main entry point of the application
├── .env.sample              # Sample environment variables
├── package.json             # Project dependencies and scripts
```

### Key Directories

- **Controllers**: Contains the logic for handling token creation, validation, and revocation.
  - Example: `AuthController.js` manages authentication-related logic like issuing and verifying tokens.
  
- **Routes**: Defines the HTTP endpoints for interacting with tokens.
  - Example: `authRoutes.js` contains routes for issuing tokens, refreshing them, and revoking them.
  
- **Models**: Includes the Mongoose models for interacting with MongoDB.
  - Example: `TokenModel.js` defines the schema for storing refresh tokens.

- **Utils**: Contains utility functions, such as those for generating JWTs and validating tokens.
  - Example: `jwtUtils.js` helps in signing and verifying tokens.

## Getting Started

### Prerequisites

- **Node.js** (v14.x or later)
- **MongoDB** (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhineetsahay/Token-Orchestrator.git
   cd Token-Orchestrator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory based on the provided `.env.sample`:

   ```bash
   cp .env.sample .env
   ```

4. Update the `.env` file with your MongoDB URL, JWT secrets, and other required configuration.

5. Start the development server:

   ```bash
   npm run dev
   ```

   The server will start on the port specified in your `.env` file (default is 4000).

## Environment Variables

The following environment variables are required to run the application:

```env
# Server configuration
PORT=4000

# Database configuration
MONGODB_URL=mongodb://localhost:27017/token_orchestrator

# JWT configuration
JWT_SECRET=your_jwt_secret_here
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
```

- **PORT**: The port on which the server will run.
- **MONGODB_URL**: MongoDB connection string.
- **JWT_SECRET**: Secret key used for signing JWT tokens.
- **REFRESH_TOKEN_SECRET**: Secret key used for signing refresh tokens.

## API Endpoints

The following endpoints are available for interacting with the Token Orchestrator:

### Authentication

- **POST /auth/login**: Generates an access and refresh token after successful login.
- **POST /auth/refresh**: Refreshes the access token using a valid refresh token.
- **POST /auth/logout**: Revokes the refresh token and ends the session.

### Token Management

- **POST /token/validate**: Validates a provided JWT token.
- **POST /token/revoke**: Revokes a specific refresh token.
