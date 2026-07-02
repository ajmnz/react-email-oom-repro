import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email047() {
  return (
    <Html>
      <Head />
      <Preview>Email047</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email047" />
        </Container>
      </Body>
    </Html>
  );
}
