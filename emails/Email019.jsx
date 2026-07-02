import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email019() {
  return (
    <Html>
      <Head />
      <Preview>Email019</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email019" />
        </Container>
      </Body>
    </Html>
  );
}
