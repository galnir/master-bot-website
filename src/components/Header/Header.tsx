import React from "react";
import styled from "styled-components";
import HeaderLink from "../HeaderLink";
import Logo from "../Logo";
import { GoRepoForked, GoCode } from "react-icons/go";
import { QUERIES } from "../../constants";

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <Logo />
        <LinksWrapper>
          <HeaderLink href="https://github.com/galnir/Master-Bot">
            Code{" "}
            <GoCode
              style={{ display: "inline-block", transform: "translateY(1px)" }}
            />
          </HeaderLink>
          <HeaderLink href="https://github.com/galnir/Master-Bot/fork">
            Fork{" "}
            <GoRepoForked
              style={{ display: "inline-block", transform: "translateY(1px)" }}
            />
          </HeaderLink>
        </LinksWrapper>
      </HeaderWrapper>
    </header>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  padding: 0 1.5rem;
  justify-content: space-between;
  color: var(--color-headline);

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

export default Header;
