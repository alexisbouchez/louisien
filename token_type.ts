export enum TokenType {
  // Special tokens
  ILLEGAL = "ILLEGAL",
  EOF = "EOF",

  // Identifiers + literals
  IDENT = "IDENT", // add, foobar, x, y, ...
  INT = "INT", // 1343456

  // Operators
  ASSIGN = "=",
  PLUS = "+",

  // Delimiters
  COMMA = ",",
  SEMICOLON = ";",

  LEFT_PAREN = "(",
  RIGHT_PAREN = ")",
  LEFT_BRACE = "{",
  RIGHT_BRACE = "}",

  // Keywords
  FUNCTION = "FUNCTION",
  LET = "LET",
  TRUE = "TRUE",
  FALSE = "FALSE",
  IF = "IF",
  ELSE = "ELSE",
  RETURN = "RETURN",

  // Comparison operators
  LOWER_THAN = "<",
  GREATER_THAN = ">",
  BANG = "!",
  MINUS = "-",
  SLASH = "/",
  ASTERISK = "*",
  EQUAL = "==",
  NOT_EQUAL = "!=",
}
