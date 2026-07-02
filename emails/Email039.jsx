import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email039() {
  return (
    <Html>
      <Head />
      <Preview>Email039</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email039" />
        </Container>
      </Body>
    </Html>
  );
}
