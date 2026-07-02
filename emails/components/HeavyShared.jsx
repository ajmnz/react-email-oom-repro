import React from "react";
import { Section, Text } from "react-email";

const ROWS = 140;
const PAYLOAD = "React Email hot reload fan-out payload. ".repeat(35);

export function HeavyShared({ name }) {
  return (
    <Section>
      {Array.from({ length: ROWS }, (_, index) => (
        <Text key={index}>
          {name} row {index}: {PAYLOAD}
        </Text>
      ))}
    </Section>
  );
}

// hot reload marker: 1782989038123
