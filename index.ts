import { Lexer } from "./lexer";

if (Bun.argv.length === 0) {
  console.log("Usage: bun run index.ts <file.louis>");
  process.exit(1);
}

const filename = Bun.argv[2];
const file = Bun.file(filename);
const contents = await file.text();
const lexer = new Lexer(contents);
for (
  let token = lexer.nextToken();
  token.type !== "EOF";
  token = lexer.nextToken()
) {
  console.log(token);
}
