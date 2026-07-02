import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email050() {
  return (
    <Html>
      <Head />
      <Preview>Email050</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email050" />
        </Container>
      </Body>
    </Html>
  );
}
