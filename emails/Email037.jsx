import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email037() {
  return (
    <Html>
      <Head />
      <Preview>Email037</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email037" />
        </Container>
      </Body>
    </Html>
  );
}
