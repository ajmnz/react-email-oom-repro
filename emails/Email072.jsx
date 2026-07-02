import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email072() {
  return (
    <Html>
      <Head />
      <Preview>Email072</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email072" />
        </Container>
      </Body>
    </Html>
  );
}
