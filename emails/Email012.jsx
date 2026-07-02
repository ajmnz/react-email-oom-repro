import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email012() {
  return (
    <Html>
      <Head />
      <Preview>Email012</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email012" />
        </Container>
      </Body>
    </Html>
  );
}
