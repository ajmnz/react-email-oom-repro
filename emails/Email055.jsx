import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email055() {
  return (
    <Html>
      <Head />
      <Preview>Email055</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email055" />
        </Container>
      </Body>
    </Html>
  );
}
