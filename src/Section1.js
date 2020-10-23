import React from "react";
import "./section1.css";
import styled from "styled-components";

export const Section1 = (props) => {
  return (
    <Container>
      <div id="S1Title">{props.title}</div>
      <div id="S2Center">
        <div id="S2">{props.FirstN}</div>
        <div id="S3">
          {props.SecondN} <h3>drugie</h3>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div``;
