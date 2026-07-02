import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email052() {
  return (
    <Html>
      <Head />
      <Preview>Email052</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email052" />
        </Container>
      </Body>
    </Html>
  );
}
