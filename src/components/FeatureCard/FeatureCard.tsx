import React from "react";
import styled from "styled-components";

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
`;

const CardHeader = styled.h1`
  font-size: 2rem;
  color: var(--color-headline);
  margin-bottom: 1rem;
  text-align: left;
`;

const CardParagraph = styled.p`
  font-size: 1.25rem;
  color: var(--color-secondary-paragraph);
  text-align: left;
`;

export default FeatureCard;
