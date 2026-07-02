import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email001() {
  return (
    <Html>
      <Head />
      <Preview>Email001</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email001" />
        </Container>
      </Body>
    </Html>
  );
}
