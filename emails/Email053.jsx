import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email053() {
  return (
    <Html>
      <Head />
      <Preview>Email053</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email053" />
        </Container>
      </Body>
    </Html>
  );
}
