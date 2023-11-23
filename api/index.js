import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors());

const products = [
    {
        "id" : 1
    }
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