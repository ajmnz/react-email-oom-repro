import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email008() {
  return (
    <Html>
      <Head />
      <Preview>Email008</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email008" />
        </Container>
      </Body>
    </Html>
  );
}
