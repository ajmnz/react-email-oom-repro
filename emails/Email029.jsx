import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email029() {
  return (
    <Html>
      <Head />
      <Preview>Email029</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email029" />
        </Container>
      </Body>
    </Html>
  );
}
