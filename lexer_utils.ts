export class LexerUtils {
  public isAlpha(character: string): boolean {
    return (
      ("a" <= character && character <= "z") ||
      ("A" <= character && character <= "Z") ||
      character === "_"
    );
  }

  public isNumeric(character: string): boolean {
    return "0" <= character && character <= "9";
  }

  public isAlphanumeric(character: string): boolean {
    return this.isAlpha(character) || this.isNumeric(character);
  }
}
