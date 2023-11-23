import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors());

const products = [
    { id: 1, name: 'Classic Watch', price: 79.99, image: '/images/classic-watch.jpg' },
    { id: 2, name: 'Running Sneakers', price: 59.99, image: '/images/running-sneakers.jpg' },
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