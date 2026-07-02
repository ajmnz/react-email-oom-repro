import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email062() {
  return (
    <Html>
      <Head />
      <Preview>Email062</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email062" />
        </Container>
      </Body>
    </Html>
  );
}
