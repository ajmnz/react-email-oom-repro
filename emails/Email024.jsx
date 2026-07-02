import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email024() {
  return (
    <Html>
      <Head />
      <Preview>Email024</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email024" />
        </Container>
      </Body>
    </Html>
  );
}
