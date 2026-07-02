import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email017() {
  return (
    <Html>
      <Head />
      <Preview>Email017</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email017" />
        </Container>
      </Body>
    </Html>
  );
}
