import { OpenAI } from 'openai';
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const responseHandler = async (req, res) => {
    try {
        const thread = await openai.beta.threads.create();
        await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: req.body.content // Assuming the message is sent in the body of the request
        });

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: "asst_4IjSi0qdqrSse3tD6PmjdDK9", // Use your assistant ID here
        });

        // Instead of while loop, use a recursive function with a timeout
        const getRunResult = async (threadId, runId) => {
            const result = await openai.beta.threads.runs.retrieve(threadId, runId);
            if (result.status === 'completed') {
                return result;
            } else {
                // Delay the next call by a certain amount of time (e.g., 500ms)
                await new Promise(resolve => setTimeout(resolve, 500));
                return getRunResult(threadId, runId); // Recurse until completed
            }
        };

        const completedRun = await getRunResult(thread.id, run.id);

        // Assuming the last message in the thread is the assistant's response
        const assistantMessage = completedRun.messages[completedRun.messages.length - 1];

        res.json({ response: assistantMessage.content.text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
};

export default responseHandler;
