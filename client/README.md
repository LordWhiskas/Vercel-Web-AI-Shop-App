# Client-Side Documentation

This document provides an overview and detailed documentation of the client-side components for a Vercel hosted React application. Each component plays a role in the overall functionality of the web application, from rendering the user interface to managing state and handling user interactions.

## :exclamation: [vercel.json](https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App/blob/main/vercel.json) file
- ```"buildCommand"```: "cd client && npm install && npm run build",
- ```"outputDirectory"```: "client/build",
- ```
  {
    "source": "/(.*)", 
    "destination": "/" - To resolve the error 404 on Vercel, we created this routing to fix routing.
  }
  ```

## `App.js` - Root Component

The `App.js` file is the entry point component, setting up routing and state management.

### Features:
- State management for cart items, chat messages, and selected product category.
- Navigation bar with links to home, cart, and chat.
- Routing for home, shopping cart, and chat pages.
- API integration for chat responses.

### Export:
- Default export of `App` component.

## `Cart.js` - Shopping Cart Component

The `Cart.js` component displays the shopping cart and manages item removal.

### Features:
- Displays cart items with the ability to remove them.
- Calculates and displays the total price of cart items.

### Export:
- Default export of `Cart` component.

## `Chat.js` - Chat Component

The `Chat.js` component provides a user interface for real-time chat interactions.

### Features:
- Sends and displays chat messages.
- Interactive chat with category selection.

### Export:
- Default export of `Chat` component.

## `Home.js` - Home Page Component

`Home.js` acts as the main page component, showcasing products and enabling user interactions.

### Features:
- Renders product listing with category-based filtering.
- Integration with `ProductCard` for adding items to the shopping cart.

### Export:
- Default export of `Home` component.

## `ProductCard.js` - Product Card Component

`ProductCard.js` represents an individual product and allows users to add it to the cart.

### Features:
- Displays product image, name, and price.
- "Add to Cart" button functionality.

### Export:
- Default export of `ProductCard` component.

## `ShoppingCartPage.js` - Shopping Cart Page Component

`ShoppingCartPage.js` sets up the shopping cart page layout.

### Features:
- Container for the `Cart` component.
- Displays a heading and renders the `Cart` with items.

### Export:
- Default export of `ShoppingCartPage` component.

---

# Additional Notes

Each component is designed to work cohesively within the React application. The components are modular and can be easily modified or extended for additional features. This documentation covers the current state of the components and should be updated as the application evolves.
