import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email031() {
  return (
    <Html>
      <Head />
      <Preview>Email031</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email031" />
        </Container>
      </Body>
    </Html>
  );
}
