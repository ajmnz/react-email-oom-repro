import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email025() {
  return (
    <Html>
      <Head />
      <Preview>Email025</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email025" />
        </Container>
      </Body>
    </Html>
  );
}
