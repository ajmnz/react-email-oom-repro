import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email064() {
  return (
    <Html>
      <Head />
      <Preview>Email064</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email064" />
        </Container>
      </Body>
    </Html>
  );
}
