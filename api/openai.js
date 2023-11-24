import { OpenAI } from 'openai';
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const responseHandler = async (req, res) => {
    try {
        const thread = await openai.beta.threads.create();
        const message = await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: req.body.content // Assuming the message is sent in the body of the request
        });

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: "asst_4IjSi0qdqrSse3tD6PmjdDK9", // use your assistant ID here
        });

        let run_retrieve = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        // Consider a non-blocking approach instead of while loop here

        const messages = await openai.beta.threads.messages.list(thread.id);
        const result = messages.body.data; // Get the last message

        res.json(run); // Send the result back as JSON
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
};


export default responseHandler;