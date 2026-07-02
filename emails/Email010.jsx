import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email010() {
  return (
    <Html>
      <Head />
      <Preview>Email010</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email010" />
        </Container>
      </Body>
    </Html>
  );
}
