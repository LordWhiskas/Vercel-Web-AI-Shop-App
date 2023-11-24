import {OpenAI} from 'openai';
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Function to process a request and get a response from OpenAI
const processRequest = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{
                role: "user", content: "Request: `" + prompt + "` Give me only products categories from this Request without additional text."
            }],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        console.log(response.choices[0].message.content);
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error in OpenAI request:', error);
        throw error;
    }
};


const responseCategory = async (text) => {
    try {
        return await processRequest(text);
    } catch (error) {
        console.error('Error:', error);
    }
};

export default responseCategory;