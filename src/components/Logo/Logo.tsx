import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

const Logo = () => {
  return (
    <StyledLink to="/">
      <LogoText>Master Bot</LogoText>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(255, 178, 62);
  background-image: linear-gradient(
    268.67deg,
    rgb(255, 255, 255) 1.43%,
    rgb(255, 240, 102) 1.69%,
    rgb(255, 163, 26) 35.54%,
    rgb(255, 0, 115) 99%
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: max-content;
`;

const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
