import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email038() {
  return (
    <Html>
      <Head />
      <Preview>Email038</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email038" />
        </Container>
      </Body>
    </Html>
  );
}
