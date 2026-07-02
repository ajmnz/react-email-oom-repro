import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email032() {
  return (
    <Html>
      <Head />
      <Preview>Email032</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email032" />
        </Container>
      </Body>
    </Html>
  );
}
