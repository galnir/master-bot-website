import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const FeatureCard = ({
  header,
  paragraph,
}: {
  header: string;
  paragraph: string;
}) => {
  return (
    <Wrapper>
      <CardHeader>{header}</CardHeader>
      <CardParagraph>{paragraph}</CardParagraph>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2.5rem;
  background: var(--color-feature-background);
  flex: 1 0 40%;
  height: 300px;
  box-shadow: 0px 2px 2px var(--color-button), 0px 2px 4px var(--color-button),
    0px 4px 8px var(--color-button), 0px 8px 16px var(--color-button);

  @media ${QUERIES.phoneAndSmaller} {
    padding: 1rem;
    height: 150px;

    box-shadow: 0px 1px 1px var(--color-button), 0px 1px 2px var(--color-button),
      0px 2px 4px var(--color-button), 0px 4px 8px var(--color-button);
  }
`;

const CardHeader = styled.h1`
  font-size: 2rem;
  color: var(--color-headline);
  margin-bottom: 1rem;
  text-align: left;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
    margin-bottom: 0.125rem;
  }
`;

const CardParagraph = styled.p`
  font-size: 1.25rem;
  color: var(--color-secondary-paragraph);
  text-align: left;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 0.75rem;
  }
`;

export default FeatureCard;
