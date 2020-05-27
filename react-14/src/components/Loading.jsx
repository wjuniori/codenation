import React from "react";
import Container from "./Container";
import "./Loading.scss";

export default function Loading() {
  return (
    <Container id="loading">
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    </Container>
  );
}
