import { createInterface } from "readline";
import { calc } from "./calc";

const io = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (): Promise<null> =>
  new Promise((resolve) => {
    io.question("> ", (answer: string) => {
      const result = calc(answer);
      if (result !== undefined) {
        console.log(`Result: ${result}`);
      }

      resolve();
    });
  });

async function app() {
  while (true) {
    await prompt();
  }
}

app();
