// api/index.js
import express from 'express';
import cors from 'cors';
import productsHandler from './products.js';
import responseHandler from './openaiChat.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productsHandler);

// app.use('/openaiChat', responseHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})