import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email063() {
  return (
    <Html>
      <Head />
      <Preview>Email063</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email063" />
        </Container>
      </Body>
    </Html>
  );
}
