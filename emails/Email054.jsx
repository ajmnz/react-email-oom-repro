import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email054() {
  return (
    <Html>
      <Head />
      <Preview>Email054</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email054" />
        </Container>
      </Body>
    </Html>
  );
}
