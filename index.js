import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
    apiKey: "sk-proj-wbO2Em2Y7LI1PjsoXsE5T3BlbkFJOLqmrpDf9BH18AjIj18x",
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "user", "content": "Quem é você?"}
    ]
});

console.log(chatCompletion.choices[0].message);