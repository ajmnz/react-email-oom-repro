import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email059() {
  return (
    <Html>
      <Head />
      <Preview>Email059</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email059" />
        </Container>
      </Body>
    </Html>
  );
}
