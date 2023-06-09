/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class OpenAIService {
  static remote = new Remote("https://2dut42467tny5qjgsc4tojmagq0qypeu.lambda-url.eu-central-1.on.aws/OpenAIService");

  static async generateRegexForPrompt(task: string): Promise<string | any> {
    return await OpenAIService.remote.call("OpenAIService.generateRegexForPrompt", task);
  }
}

export { Remote };
