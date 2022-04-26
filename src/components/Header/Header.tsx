import React from "react";
import styled from "styled-components";
import HeaderLink from "../HeaderLink";
import Logo from "../Logo";

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <Logo />
        <LinksWrapper>
          <HeaderLink href="https://github.com/galnir/Master-Bot">
            Code
          </HeaderLink>
          <HeaderLink href="https://github.com/galnir/Master-Bot/fork">
            Fork
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
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export default Header;
