import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email066() {
  return (
    <Html>
      <Head />
      <Preview>Email066</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email066" />
        </Container>
      </Body>
    </Html>
  );
}
