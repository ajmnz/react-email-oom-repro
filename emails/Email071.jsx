import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email071() {
  return (
    <Html>
      <Head />
      <Preview>Email071</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email071" />
        </Container>
      </Body>
    </Html>
  );
}
