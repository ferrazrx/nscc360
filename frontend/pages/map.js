import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "../components/Navbar/style";
import Tour from "../components/Tour";

export default function map() {
  return (
    <>
      <Container className="container position-absolute">
        <Navbar />
      </Container>
      <Tour />
    </>
  );
}
