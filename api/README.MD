# Server Documentation

### `index.js`

The central server file configures the Express app, applies middleware for CORS and JSON handling, and binds routes to their handlers.

### `db.js`

Provides the functionality to connect to the database and exposes the database client for use in other modules.

### `products.js`

Handles routes related to product retrieval from the database and serves the responses back to the client.

### `openaiChat.js` & `openaiFindCategory.js`

These files integrate AI capabilities for chatting and category-based product searching using OpenAI's APIs.

## Acknowledgments

Special thanks to [Arvind](https://github.com/Arvind-4) for providing the server template that served as a foundation for this project. Their contributions were invaluable to the development process and greatly appreciated.
