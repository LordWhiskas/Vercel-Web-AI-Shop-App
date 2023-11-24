import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB);
let dbConnection;

export const connectToDatabase = async () => {
    if (!dbConnection) {
        await client.connect();
        dbConnection = client.db('AIWebShopApp');
    }
    return dbConnection;
};
