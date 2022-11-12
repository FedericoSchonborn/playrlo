import { Client } from "../mod.ts";

const code = String.raw`
fn   main(
    ) {
println! ("Hello, world!")
    ;
        }
`;

const client = new Client({ userAgent: "playrlo-format-example/0.0.0" });
const response = await client.format(code);
console.log(response);