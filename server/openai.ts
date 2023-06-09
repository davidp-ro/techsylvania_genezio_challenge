import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import dotenv from "dotenv";
dotenv.config();

export class OpenAIService {
  public async generateRegexForPrompt(task: string): Promise<string | null> {
    const openai = new OpenAIApi(
      new Configuration({ apiKey: process.env.OPENAI_SK })
    );

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      messages: [
        {
          role: ChatCompletionRequestMessageRoleEnum.User,
          content: `Create a regex that ${task}. Reply ONLY with the REGEX`,
        },
      ],
      max_tokens: 256, // Try to limit it so it only responds with the regex
    });

    if (
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0 &&
      response.data.choices[0].message
    ) {
      try {
        return response.data.choices[0].message.content;
      } catch (e) {
        console.error(`Failed - ${e}`);
        return null;
      }
    }

    console.error(`Failed, missing data - ${JSON.stringify(response)}`);
    return null;
  }
}
