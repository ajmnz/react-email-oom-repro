import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email058() {
  return (
    <Html>
      <Head />
      <Preview>Email058</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email058" />
        </Container>
      </Body>
    </Html>
  );
}
