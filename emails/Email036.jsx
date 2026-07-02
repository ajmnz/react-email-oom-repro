import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email036() {
  return (
    <Html>
      <Head />
      <Preview>Email036</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email036" />
        </Container>
      </Body>
    </Html>
  );
}
