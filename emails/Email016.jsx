import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email016() {
  return (
    <Html>
      <Head />
      <Preview>Email016</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email016" />
        </Container>
      </Body>
    </Html>
  );
}
