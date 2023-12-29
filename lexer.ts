import { LexerUtils } from "./lexer_utils";
import { Token } from "./token";
import { TokenType } from "./token_type";

export class Lexer {
  private currentPosition: number = 0;
  private currentCharacter: string;

  private utils: LexerUtils = new LexerUtils();

  constructor(private readonly input: string) {
    this.currentCharacter = input[this.currentPosition];
  }

  public nextToken(): Token {
    let token: Token;

    this.skipWhitespace();

    switch (this.currentCharacter) {
      case "=":
        if (this.peekCharacter() == "=") {
          const char = this.currentCharacter;
          this.readCharacter();
          const literal = char + this.currentCharacter;
          token = new Token(TokenType.EQUAL, literal);
        } else {
          token = new Token(TokenType.ASSIGN, this.currentCharacter);
        }
        break;
      case ";":
        token = new Token(TokenType.SEMICOLON, this.currentCharacter);
        break;
      case "(":
        token = new Token(TokenType.LEFT_PAREN, this.currentCharacter);
        break;
      case ")":
        token = new Token(TokenType.RIGHT_PAREN, this.currentCharacter);
        break;
      case ",":
        token = new Token(TokenType.COMMA, this.currentCharacter);
        break;
      case "+":
        token = new Token(TokenType.PLUS, this.currentCharacter);
        break;
      case "{":
        token = new Token(TokenType.LEFT_BRACE, this.currentCharacter);
        break;
      case "}":
        token = new Token(TokenType.RIGHT_BRACE, this.currentCharacter);
        break;
      case "-":
        token = new Token(TokenType.MINUS, this.currentCharacter);
        break;
      case "/":
        token = new Token(TokenType.SLASH, this.currentCharacter);
        break;
      case "*":
        token = new Token(TokenType.ASTERISK, this.currentCharacter);
        break;
      case "<":
        token = new Token(TokenType.LOWER_THAN, this.currentCharacter);
        break;
      case ">":
        token = new Token(TokenType.GREATER_THAN, this.currentCharacter);
        break;
      case "!":
        if (this.peekCharacter() == "=") {
          const char = this.currentCharacter;
          this.readCharacter();
          const literal = char + this.currentCharacter;
          token = new Token(TokenType.NOT_EQUAL, literal);
        } else {
          token = new Token(TokenType.BANG, this.currentCharacter);
        }
        break;
      case "":
        token = new Token(TokenType.EOF, "");
        break;
      default:
        if (this.utils.isAlpha(this.currentCharacter)) {
          const literal = this.readIdentifier();
          const type = Token.lookupIdentifier(literal);

          return new Token(type, literal);
        } else if (this.utils.isNumeric(this.currentCharacter)) {
          const literal = this.readNumber();
          const type = TokenType.INT;

          return new Token(type, literal);
        } else {
          token = new Token(TokenType.ILLEGAL, this.currentCharacter);
        }
    }

    this.readCharacter();

    return token;
  }

  private readCharacter() {
    if (this.currentPosition >= this.input.length) {
      this.currentCharacter = "";
    } else {
      this.currentCharacter = this.input[this.currentPosition];
    }

    this.currentPosition++;
  }

  private readIdentifier(): string {
    const identifierStartingPosition = this.currentPosition - 1;

    while (this.utils.isAlphanumeric(this.currentCharacter)) {
      this.readCharacter();
    }

    const identifierEndingPosition = this.currentPosition - 1;

    return this.input.slice(
      identifierStartingPosition,
      identifierEndingPosition
    );
  }

  private readNumber(): string {
    const position = this.currentPosition;
    while (this.utils.isNumeric(this.currentCharacter)) {
      this.readCharacter();
    }

    return this.input.slice(position, this.currentPosition);
  }

  private peekCharacter(): string {
    const nextPosition = this.currentPosition + 1;
    if (nextPosition >= this.input.length) {
      return "";
    }
    return this.input[nextPosition];
  }

  private skipWhitespace() {
    while (
      this.currentCharacter === " " ||
      this.currentCharacter === "\t" ||
      this.currentCharacter === "\n" ||
      this.currentCharacter === "\r"
    ) {
      this.readCharacter();
    }
  }
}
