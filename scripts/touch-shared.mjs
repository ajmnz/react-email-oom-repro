import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sharedPath = path.join(root, "emails/components/HeavyShared.jsx");
const source = await fs.readFile(sharedPath, "utf8");
const nextSource = source.replace(
  /\/\/ hot reload marker: .*/,
  `// hot reload marker: ${Date.now()}`
);

await fs.writeFile(sharedPath, nextSource);
console.log(`Touched ${path.relative(root, sharedPath)}`);
