import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email034() {
  return (
    <Html>
      <Head />
      <Preview>Email034</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email034" />
        </Container>
      </Body>
    </Html>
  );
}
