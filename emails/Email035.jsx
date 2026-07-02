import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email035() {
  return (
    <Html>
      <Head />
      <Preview>Email035</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email035" />
        </Container>
      </Body>
    </Html>
  );
}
