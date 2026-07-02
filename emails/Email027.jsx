import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email027() {
  return (
    <Html>
      <Head />
      <Preview>Email027</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email027" />
        </Container>
      </Body>
    </Html>
  );
}
