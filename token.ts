import { TokenType } from "./token_type";

export class Token {
  public readonly type: TokenType;
  public readonly literal: string;

  constructor(type: TokenType, literal: string) {
    this.type = type;
    this.literal = literal;
  }

  public static lookupIdentifier(literal: string): TokenType {
    switch (literal) {
      case "fonction":
        return TokenType.FUNCTION;
      case "soit":
        return TokenType.LET;
      case "vrai":
        return TokenType.TRUE;
      case "faux":
        return TokenType.FALSE;
      case "si":
        return TokenType.IF;
      case "sinon":
        return TokenType.ELSE;
      case "retourner":
        return TokenType.RETURN;
      default:
        return TokenType.IDENT;
    }
  }
}
