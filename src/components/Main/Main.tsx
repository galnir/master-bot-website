import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import ExampleSpan from "../ExampleSpan";

const Main = () => {
  return (
    <MainWrapper>
      <Example>
        <StaticImage
          src="../../images/bot-usage.png"
          alt="Bot Usage Example"
          placeholder="blurred"
          style={{
            width: "50%",
            objectFit: "contain",
          }}
        />
        <ExampleParagraph>
          Master Bot is a Discord music bot that lets you play music from{" "}
          <ExampleSpan from="#20bf55" to="#27b458">
            Spotify
          </ExampleSpan>
          ,{" "}
          <ExampleSpan from="#c43916" to="#eb4511">
            YouTube
          </ExampleSpan>{" "}
          and{" "}
          <ExampleSpan from="#fbd72b" to="#f9484a">
            SoundCloud
          </ExampleSpan>
        </ExampleParagraph>
      </Example>
      <Example>
        <StaticImage
          src="../../images/bot-trivia-example.png"
          alt="Bot Usage Trivia Example"
          placeholder="blurred"
          style={{
            width: "50%",
            objectFit: "contain",
          }}
        />
        <ExampleParagraph>
          You can also engage in fun{" "}
          <ExampleSpan from="#ffad42 37%" to="#e4ff6d 100%">
            Music Trivias
          </ExampleSpan>{" "}
          with your friends!
        </ExampleParagraph>
      </Example>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Example = styled.article`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  padding: 1.5rem 2rem;
`;

const ExampleParagraph = styled.p`
  color: var(--color-paragraph);
  font-size: 1.25rem;
  text-align: center;
  width: 40%;
`;

export default Main;
