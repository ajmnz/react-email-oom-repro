import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const emailsDir = path.join(root, "emails");
const templateCount = 72;

await fs.mkdir(emailsDir, { recursive: true });

for (let index = 1; index <= templateCount; index += 1) {
  const name = `Email${String(index).padStart(3, "0")}`;
  const source = `import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function ${name}() {
  return (
    <Html>
      <Head />
      <Preview>${name}</Preview>
      <Body>
        <Container>
          <HeavyShared name="${name}" />
        </Container>
      </Body>
    </Html>
  );
}
`;

  await fs.writeFile(path.join(emailsDir, `${name}.jsx`), source);
}

console.log(`Generated ${templateCount} templates in ${emailsDir}`);
