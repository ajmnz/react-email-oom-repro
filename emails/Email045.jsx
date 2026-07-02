import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email045() {
  return (
    <Html>
      <Head />
      <Preview>Email045</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email045" />
        </Container>
      </Body>
    </Html>
  );
}
