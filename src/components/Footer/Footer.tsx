import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const Footer = () => {
  return <Wrapper />;
};

const Wrapper = styled.footer`
  background: var(--color-background);
  height: 100px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 50px;
  }
`;

export default Footer;
