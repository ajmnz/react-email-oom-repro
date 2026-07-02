import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email006() {
  return (
    <Html>
      <Head />
      <Preview>Email006</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email006" />
        </Container>
      </Body>
    </Html>
  );
}
