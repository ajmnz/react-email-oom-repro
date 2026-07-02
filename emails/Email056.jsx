import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email056() {
  return (
    <Html>
      <Head />
      <Preview>Email056</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email056" />
        </Container>
      </Body>
    </Html>
  );
}
