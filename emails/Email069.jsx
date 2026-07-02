import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email069() {
  return (
    <Html>
      <Head />
      <Preview>Email069</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email069" />
        </Container>
      </Body>
    </Html>
  );
}
