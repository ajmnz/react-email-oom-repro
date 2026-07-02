import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email022() {
  return (
    <Html>
      <Head />
      <Preview>Email022</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email022" />
        </Container>
      </Body>
    </Html>
  );
}
