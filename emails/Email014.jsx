import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email014() {
  return (
    <Html>
      <Head />
      <Preview>Email014</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email014" />
        </Container>
      </Body>
    </Html>
  );
}
