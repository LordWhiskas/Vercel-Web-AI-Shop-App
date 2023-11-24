import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const client = new MongoClient(process.env.MONGODB);
console.log(client);
let dbConnection;

export const connectToDatabase = async () => {
    if (!dbConnection) {
        await client.connect();
        dbConnection = client.db(); // Use the database name if necessary
    }
    console.log(dbConnection);
    return dbConnection;
};