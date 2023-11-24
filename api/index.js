import Express  from "express";
import cors from "cors";
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = Express();
require('dotenv').config();

app.use(cors());

const uri = process.env.MONGODB

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default async function handler(req, res) {
    async function run() {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);
    res.json(200);
}