import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email051() {
  return (
    <Html>
      <Head />
      <Preview>Email051</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email051" />
        </Container>
      </Body>
    </Html>
  );
}
