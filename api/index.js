import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors());

const products = [
    { id: 1, name: 'Classic Watch', price: 79.99, image: '/images/classic-watch.jpg', category:"Watch" },
    { id: 2, name: 'Running Sneakers', price: 59.99, image: '/images/running-sneakers.jpg', category:"Shoes" },
    { id: 3, name: 'Bluetooth Headphones', price: 120.00, image: '/images/bluetooth-headphones.jpg', category: "Headphones"},
    { id: 4, name: 'Elegant Desk Lamp', price: 45.99, image: '/images/desk-lamp.jpg', category: "Lamp" },
    { id: 5, name: 'Leather Wallet', price: 34.99, image: '/images/leather-wallet.jpg',category: "Wallet" },
    { id: 6, name: 'Stylish Backpack', price: 74.99, image: '/images/backpack.jpg', category: "Backpack" },
    { id: 7, name: 'Sports Water Bottle', price: 19.99, image: '/images/water-bottle.jpg', category: "Bottle" },
    { id: 8, name: 'Digital Smart Watch', price: 199.99, image: '/images/smart-watch.jpg', category: "Watch" },
    { id: 9, name: 'Yoga Mat', price: 22.99, image: '/images/yoga-mat.jpg', category: "Mat" },
    { id: 10, name: 'Wireless Mouse', price: 29.99, image: '/images/wireless-mouse.jpg', category: "Mouse" },
    { id: 11, name: 'Noise Cancelling Earbuds', price: 129.99, image: '/images/earbuds.jpg', category: "Headphones"},
    { id: 12, name: 'Stainless Steel Water Flask', price: 25.99, image: '/images/water-flask.jpg', category: "Bottle" },
    { id: 13, name: 'Hiking Boots', price: 135.99, image: '/images/hiking-boots.jpg', category: "Shoes" },
    { id: 14, name: 'Insulated Jacket', price: 99.99, image: '/images/jacket.jpg', category: "Jacket" },
    { id: 15, name: 'Performance T-Shirt', price: 24.99, image: '/images/tshirt.jpg', category: "T-Shirt" },
    { id: 16, name: 'Sunglasses', price: 89.99, image: '/images/sunglasses.jpg', category: "Sunglasses" },
    { id: 17, name: 'Casual Hat', price: 17.99, image: '/images/hat.jpg', category: "Hat" },
    { id: 18, name: 'Wristband', price: 9.99, image: '/images/wristband.jpg', category: "Wristband" },
    { id: 19, name: 'Beanie', price: 12.99, image: '/images/beanie.jpg', category: "Hat" },
    { id: 20, name: 'Ankle Socks', price: 14.99, image: '/images/socks.jpg', category: "Socks" }
];


app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
})