import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

let dbConnection;

export const connectToDatabase = async () => {
    if (!dbConnection) {
        await client.connect();
        dbConnection = client.db(); // Use the database name if necessary
    }
    return dbConnection;
};