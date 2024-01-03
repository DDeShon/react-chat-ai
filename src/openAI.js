const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
  });
}
