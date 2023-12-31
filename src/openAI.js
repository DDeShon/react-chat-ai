import apiKey from "./.env";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: apiKey });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return response.data.choices[0].text;
}
