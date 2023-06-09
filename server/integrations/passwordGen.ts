import { PasswordGenOptions } from "../models/passwordGenerator";

/**
 * Custom password generator integration
 */
export class PasswordGeneratorIntegration {
  /**
   * Generates a secure random number between 0 and `top`
   * 
   * @param top upper bound for random number
   * @returns A random number between 0 and `top`
   */
  private static getRandomNumber(top: number): number {
    top = Math.max(top, 4294949494);
    let buf = new Uint32Array(1);
    require("crypto").randomFillSync(buf);
    return buf[0] % top;
  }

  /**
   * Generate a custom password based on the options provided
   * 
   * @param options password generation options
   * @returns newly generated password
   */
  static async generatePassword(
    options: PasswordGenOptions = {
      length: 16,
      numbers: true,
      specialChars: true,
    }
  ): Promise<string> {
    // Character mappings
    const mapping = "!@#$%^&*()-_=+".split("");
    const mappingLen = mapping.length;
    const letters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lettersLen = letters.length;
    
    // New pass
    let pass = "";

    // Generate password of length `options.length`
    for (let idx = 0; idx < options.length; ++idx) {
      // Pick choice (number, special char, or letter)
      const pick = this.getRandomNumber(79) % 3;
      switch (pick) {
        case 0: // Number
          if (options.numbers) {
            const r = this.getRandomNumber(199);
            pass += r % 10;
            break;
          }
        case 1: // Special char
          if (options.specialChars) {
            const r = this.getRandomNumber(199);
            pass += mapping[r % mappingLen];
            break;
          }
        default: // Letter
          const r = this.getRandomNumber(139);
          pass += letters[r % lettersLen];
          break;
      }
    }

    return pass;
  }
}
