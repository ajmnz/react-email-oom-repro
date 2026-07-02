import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email007() {
  return (
    <Html>
      <Head />
      <Preview>Email007</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email007" />
        </Container>
      </Body>
    </Html>
  );
}
