import React from "react";
import { Body, Container, Head, Html, Preview } from "react-email";
import { HeavyShared } from "./components/HeavyShared.jsx";

export default function Email070() {
  return (
    <Html>
      <Head />
      <Preview>Email070</Preview>
      <Body>
        <Container>
          <HeavyShared name="Email070" />
        </Container>
      </Body>
    </Html>
  );
}
