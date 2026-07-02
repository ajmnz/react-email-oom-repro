import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email067() {
  return (
    <Html>
      <Head />
      <Preview>Email067</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email067" />
        </Container>
      </Body>
    </Html>
  );
}
