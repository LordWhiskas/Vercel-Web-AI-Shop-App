import { MongoClient } from 'mongodb';

// Global variable to store the database connection
let dbConnection;

export default async function handler(req, res) {
    if (!dbConnection) {
        // Create a new MongoClient only if one doesn't exist
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        dbConnection = client.db();
    }

    try {
        // Use the database connection to handle the request
        const products = await dbConnection.collection('products').find().toArray();
        res.status(200).json(products);
    } catch (error) {
        console.error('Database query error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
