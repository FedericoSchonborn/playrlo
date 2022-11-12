import { Client } from "../mod.ts";

const client = new Client({ userAgent: "playrlo-crates-example/0.0.0" });
const crates = await client.crates();
crates.forEach(({ name, version }) => {
  console.log(`${name} (${version})`);
});
