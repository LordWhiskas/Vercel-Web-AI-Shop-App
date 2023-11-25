# Server Documentation

## API Endpoints

- `GET /api/products`: Fetches and returns the list of products.

- `GET /api/openaiChat`: Endpoint for interacting with the chatbot.

- :exclamation: `/api/(.*)`: All files with `/api` processing `index.js`, see [vercel.json](https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App/blob/main/vercel.json).

This document provides an overview and detailed documentation of the server-side components for a Vercel hosted React application. Each server-side file contributes to the backend functionality, from handling database connections to responding to API requests.

## `db.js` - Database Connection Module

Handles the MongoDB database connection setup.

### Features:
- Loads environment variables for database connection.
- Caches and exports a MongoDB database connection.

## `index.js` - Server Entry Point

The entry point for the server application, setting up the server and routing.

### Features:
- Configures environment variables, server port, and initializes Express app.
- Sets up CORS and JSON parsing middleware.
- Defines API routes for products and chat interactions.

## `openaiChat.js` - OpenAI Chat Handler

Manages chat interactions with OpenAI's API.

### Features:
- Initializes OpenAI API with credentials.
- Handles chat message POST requests and processes OpenAI responses.
- Exports a response handler for chat functionality.

## `openaiFindCategory.js` - Category Identification Handler

Identifies product categories from user input using OpenAI's API.

### Features:
- Configures OpenAI API settings.
- Sends prompts to OpenAI and extracts categories.
- Handles errors and rethrows for calling function to handle.

## `products.js` - Products API Handler

Manages retrieval of product data from the database.

### Features:
- Connects to the database and fetches product data.
- Handles GET requests to `/api/products` and sends product data as JSON.
- Exports a handler for product data retrieval.

---

# Additional Notes

The server-side architecture is designed to support the functionality required for a shopping web application, handling data persistence, and client-server communication. The backend is built with modularity and scalability in mind, allowing for easy maintenance and expansion. This unified documentation should be updated alongside any changes or additions to the server-side codebase.

## Acknowledgments

Special thanks to [Arvind](https://github.com/Arvind-4) for providing the server template that served as a foundation for this project. Their contributions were invaluable to the development process and greatly appreciated.
