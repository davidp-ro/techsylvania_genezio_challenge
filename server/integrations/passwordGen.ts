import { PasswordGenOptions } from "../models/passwordGenerator";

export class PasswordGeneratorIntegration {
  private static getRandomNumber(top: number): number {
    top = Math.max(top, 4294949494);
    let buf = new Uint32Array(1);
    require("crypto").randomFillSync(buf);
    return buf[0] % top;
  }

  static async generatePassword(
    options: PasswordGenOptions = {
      length: 16,
      numbers: true,
      specialChars: true,
    }
  ): Promise<string> {
    const mapping = "!@#$%^&*()-_=+".split("");
    const mappingLen = mapping.length;
    const letters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lettersLen = letters.length;
    let pass = "";

    for (let idx = 0; idx < options.length; ++idx) {
      const pick = this.getRandomNumber(79) % 3;
      switch (pick) {
        case 0:
          if (options.numbers) {
            const r = this.getRandomNumber(199);
            pass += r % 10;
            break;
          }
        case 1:
          if (options.specialChars) {
            const r = this.getRandomNumber(199);
            pass += mapping[r % mappingLen];
            break;
          }
        default:
          const r = this.getRandomNumber(139);
          pass += letters[r % lettersLen];
          break;
      }
    }

    return pass;
  }
}
