import React from "react";
import styled from "styled-components";

type HeaderLinkProps = {
  children: React.ReactNode;
  href: string;
};

const HeaderLink = ({ children, ...delegated }: HeaderLinkProps) => {
  return (
    <Wrapper target="_blank" {...delegated}>
      <Text>{children}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: block;
  text-decoration: none;
  margin-top: 0.375rem;
  font-size: 1.125rem;
  color: inherit;
  padding: 0.25rem;
  background: var(--color-button);
  border-radius: 4px;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.4);
  }
`;

const Text = styled.span`
  display: block;
`;

export default HeaderLink;
