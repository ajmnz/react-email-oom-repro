import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email021() {
  return (
    <Html>
      <Head />
      <Preview>Email021</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email021" />
        </Container>
      </Body>
    </Html>
  );
}
