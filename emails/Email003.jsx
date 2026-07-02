import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email003() {
  return (
    <Html>
      <Head />
      <Preview>Email003</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email003" />
        </Container>
      </Body>
    </Html>
  );
}
