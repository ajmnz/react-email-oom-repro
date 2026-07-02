import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email044() {
  return (
    <Html>
      <Head />
      <Preview>Email044</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email044" />
        </Container>
      </Body>
    </Html>
  );
}
