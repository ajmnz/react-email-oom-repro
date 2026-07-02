import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email002() {
  return (
    <Html>
      <Head />
      <Preview>Email002</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email002" />
        </Container>
      </Body>
    </Html>
  );
}
