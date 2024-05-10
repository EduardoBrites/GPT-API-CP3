/* import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
    apiKey: "sk-proj-wbO2Em2Y7LI1PjsoXsE5T3BlbkFJOLqmrpDf9BH18AjIj18x",
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "user", "content": "Write the first line of a story about a magic backpack"}
    ]
});

console.log(chatCompletion.choices[0].message); */

import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//configuração da openai com api key --- se fosse gemni só trocar
const openai = new OpenAI({
    organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
    apiKey: "sk-proj-wbO2Em2Y7LI1PjsoXsE5T3BlbkFJOLqmrpDf9BH18AjIj18x",
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {

    const { messages } = req.body;

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "Seja um especialista em plantas e responda como um profissional"},
            ...messages
        ]
    });

    res.json({
        chat_completion: chatCompletion.choices[0]
    })

})

app.listen(port, () => {
    console.log(`exemplo de app consumindo https://localhost:${port}`);
});
