import { Configuration, OpenAIApi } from "openai";

export const getCompletion = async (input) => {
  console.log(`\nretrieving environment variables...`)
  const openai = new OpenAIApi(new Configuration({ apiKey: process.env.REACT_APP_GPT_API_KEY }));
  console.log(`process.env.REACT_APP_GPT_API_KEY: ${process.env.REACT_APP_GPT_API_KEY}\n`)
  const { data } = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });

  return data.choices.map(({ message }) => message.content);
};
