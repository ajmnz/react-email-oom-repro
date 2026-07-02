import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email043() {
  return (
    <Html>
      <Head />
      <Preview>Email043</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email043" />
        </Container>
      </Body>
    </Html>
  );
}
