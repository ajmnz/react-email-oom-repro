import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email061() {
  return (
    <Html>
      <Head />
      <Preview>Email061</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email061" />
        </Container>
      </Body>
    </Html>
  );
}
