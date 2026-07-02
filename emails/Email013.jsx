import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email013() {
  return (
    <Html>
      <Head />
      <Preview>Email013</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email013" />
        </Container>
      </Body>
    </Html>
  );
}
