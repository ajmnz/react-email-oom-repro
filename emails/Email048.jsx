import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email048() {
  return (
    <Html>
      <Head />
      <Preview>Email048</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email048" />
        </Container>
      </Body>
    </Html>
  );
}
