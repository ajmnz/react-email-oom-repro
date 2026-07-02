import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email057() {
  return (
    <Html>
      <Head />
      <Preview>Email057</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email057" />
        </Container>
      </Body>
    </Html>
  );
}
