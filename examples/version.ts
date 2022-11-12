import { Channel, Client, Tool } from "../mod.ts";

const client = new Client({ userAgent: "playrlo-version-example/0.0.0" });

console.log("Channels:");
const channels: Channel[] = [
  "stable",
  "beta",
  "nightly",
];
for (const channel of channels) {
  const { version, date, hash } = await client.version(channel);
  console.log(`    ${channel} (${version}, hash: ${hash}, date: ${date})`);
}

console.log("Tools:");
const tools: Tool[] = [
  "rustfmt",
  "clippy",
  "miri",
];
for (const tool of tools) {
  const { version, date, hash } = await client.version(tool);
  console.log(`    ${tool} (${version}, hash: ${hash}, date: ${date})`);
}
