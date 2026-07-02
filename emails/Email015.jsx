import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email015() {
  return (
    <Html>
      <Head />
      <Preview>Email015</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email015" />
        </Container>
      </Body>
    </Html>
  );
}
