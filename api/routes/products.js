
import { connectToDatabase } from '../db.js';

const productsHandler = async (req, res) => {
    const db = await connectToDatabase();
    const products = await db.collection('products').find().toArray();
    res.json(products);
};

export default productsHandler;
