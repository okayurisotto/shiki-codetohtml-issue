import { codeToHtml } from "shiki";

const lang = "invalid";
const code = `Hello, world!`;
const theme = "tokyo-night";

// Uncommenting the line below will eliminate the error.
//codeToHtml("", { lang: "plaintext", theme });

try {
  console.log(await codeToHtml(code, { lang, theme })); // Throws, but handled.
} catch {
  console.error(`Language \`${lang}\` is invalid. Falling back to \`plaintext\`.`);
  console.log(await codeToHtml(code, { lang: "plaintext", theme })); // Still throws.
}
