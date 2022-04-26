import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

type ExampleSpanProps = {
  children: React.ReactNode;
  from: string;
  to: string;
};

const ExampleSpan = ({ children, from, to }: ExampleSpanProps) => {
  return (
    <Span from={from} to={to}>
      {children}
    </Span>
  );
};

const Span = styled.span<{ from: string; to: string }>`
  font-size: 1.5rem;
  background: -webkit-linear-gradient(
    180deg,
    ${(props) => props.from},
    ${(props) => props.to}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

export default ExampleSpan;
