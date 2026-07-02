import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email040() {
  return (
    <Html>
      <Head />
      <Preview>Email040</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email040" />
        </Container>
      </Body>
    </Html>
  );
}
