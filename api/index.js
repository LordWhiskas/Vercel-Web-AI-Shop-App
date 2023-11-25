// api/index.js
import express from 'express';
import cors from 'cors';
import productsHandler from './routes/products.js';
import responseHandler from './routes/openaiChat.js';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsHandler);

app.use('/api/openaiChat', responseHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})