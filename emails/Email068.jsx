import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email068() {
  return (
    <Html>
      <Head />
      <Preview>Email068</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email068" />
        </Container>
      </Body>
    </Html>
  );
}
