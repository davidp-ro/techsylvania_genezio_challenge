import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import dotenv from "dotenv";
dotenv.config();

/**
 * Service for interacting with the OpenAI API
 */
export class OpenAIService {
  /**
   * Generate a regex for a given task
   * 
   * @param task complete the prompt "Create a regex that ${task}"
   * @returns GPT-3 generated regex (possibly with some other content, but we
   * try to avoid that, see "Reply ONLY with the REGEX")
   */
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
