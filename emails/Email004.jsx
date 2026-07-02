import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email004() {
  return (
    <Html>
      <Head />
      <Preview>Email004</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email004" />
        </Container>
      </Body>
    </Html>
  );
}
