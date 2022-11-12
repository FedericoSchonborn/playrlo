import { Client } from "../mod.ts";

const code = String.raw`
fn main() {
    println!("Hello, world!");
}
`;

const client = new Client({ userAgent: "playrlo-compile-example/0.0.0" });
const { code: result, stderr } = await client.compile(code, {
  channel: "nightly",
});
console.log(`Result: ${result}`);

if (stderr) {
  console.log(`Got stderr: ${stderr}`);
}
