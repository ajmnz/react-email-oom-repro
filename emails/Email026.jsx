import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email026() {
  return (
    <Html>
      <Head />
      <Preview>Email026</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email026" />
        </Container>
      </Body>
    </Html>
  );
}
