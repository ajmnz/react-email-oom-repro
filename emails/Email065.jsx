import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email065() {
  return (
    <Html>
      <Head />
      <Preview>Email065</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email065" />
        </Container>
      </Body>
    </Html>
  );
}
