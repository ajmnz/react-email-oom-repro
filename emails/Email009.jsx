import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email009() {
  return (
    <Html>
      <Head />
      <Preview>Email009</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email009" />
        </Container>
      </Body>
    </Html>
  );
}
