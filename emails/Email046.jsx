import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email046() {
  return (
    <Html>
      <Head />
      <Preview>Email046</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email046" />
        </Container>
      </Body>
    </Html>
  );
}
