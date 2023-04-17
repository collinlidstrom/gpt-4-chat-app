import { Configuration, OpenAIApi } from "openai";

const apiKey = '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';
const openai = new OpenAIApi(new Configuration({ apiKey }));

export const getCompletion = async (input) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  return completion.data.choices.map(choice => choice.message.content);
};
