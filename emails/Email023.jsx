import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email023() {
  return (
    <Html>
      <Head />
      <Preview>Email023</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email023" />
        </Container>
      </Body>
    </Html>
  );
}
