import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email005() {
  return (
    <Html>
      <Head />
      <Preview>Email005</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email005" />
        </Container>
      </Body>
    </Html>
  );
}
