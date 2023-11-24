// api/index.js
import express from 'express';
import cors from 'cors';
import { router as productsRouter } from './products.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 8000
const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})