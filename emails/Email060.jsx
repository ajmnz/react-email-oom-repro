import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email060() {
  return (
    <Html>
      <Head />
      <Preview>Email060</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email060" />
        </Container>
      </Body>
    </Html>
  );
}
