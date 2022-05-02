import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import FeatureCard from "../FeatureCard";

const FeaturesSection = () => {
  return (
    <Wrapper>
      <FeaturesHeader>More Features</FeaturesHeader>
      <CardWrapper>
        <FeatureCard
          header="Custom Playlists"
          paragraph="Import and save YouTube and Spotify playlists so that you can play them later easily."
        />
        <FeatureCard
          header="Gifs"
          paragraph="Search and display gifs in chat."
        />
        <FeatureCard
          header="Reddit"
          paragraph="Display a list of posts from any subreddit and sort by Hot / New / Top."
        />
        <FeatureCard
          header="Translate"
          paragraph="Translate from any language to any language using Google Translate"
        />
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--color-secondary-background);
  text-align: center;
  padding-bottom: 2rem;
`;

const FeaturesHeader = styled.h1`
  color: var(--color-headline);
  font-size: 2rem;
  margin: 3rem 0 4rem 0;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1.125rem;
    margin: 1rem 0 1rem 0;
    padding-bottom: 1rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  gap: 2rem;

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 0.5rem;
    gap: 0.75rem;
  }
`;

export default FeaturesSection;
