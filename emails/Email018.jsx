import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email018() {
  return (
    <Html>
      <Head />
      <Preview>Email018</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email018" />
        </Container>
      </Body>
    </Html>
  );
}
