import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email011() {
  return (
    <Html>
      <Head />
      <Preview>Email011</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email011" />
        </Container>
      </Body>
    </Html>
  );
}
