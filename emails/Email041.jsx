import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email041() {
  return (
    <Html>
      <Head />
      <Preview>Email041</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email041" />
        </Container>
      </Body>
    </Html>
  );
}
