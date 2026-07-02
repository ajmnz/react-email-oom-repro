import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email042() {
  return (
    <Html>
      <Head />
      <Preview>Email042</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email042" />
        </Container>
      </Body>
    </Html>
  );
}
