import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email030() {
  return (
    <Html>
      <Head />
      <Preview>Email030</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email030" />
        </Container>
      </Body>
    </Html>
  );
}
