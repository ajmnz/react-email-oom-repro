import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email020() {
  return (
    <Html>
      <Head />
      <Preview>Email020</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email020" />
        </Container>
      </Body>
    </Html>
  );
}
