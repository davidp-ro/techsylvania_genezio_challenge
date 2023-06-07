/**
* This is an auto generated code. This code should not be modified since the file can be overwriten
* if new genezio commands are executed.
*/

import { Remote } from "./remote";


export class Hello {
  static remote = new Remote("https://dclyyfbjx52x75np2s35u5znau0oesck.lambda-url.eu-central-1.on.aws/Hello");

  static async sayHello(): Promise<string> {
    return await Hello.remote.call("Hello.sayHello");
  }
}

export { Remote };
