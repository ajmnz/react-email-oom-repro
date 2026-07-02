import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email049() {
  return (
    <Html>
      <Head />
      <Preview>Email049</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email049" />
        </Container>
      </Body>
    </Html>
  );
}
