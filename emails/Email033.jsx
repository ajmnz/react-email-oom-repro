import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email033() {
  return (
    <Html>
      <Head />
      <Preview>Email033</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email033" />
        </Container>
      </Body>
    </Html>
  );
}
