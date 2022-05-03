import * as React from "react";
import App from "../components/App";
import GlobalStyles from "../components/GlobalStyles";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"></meta>
        <title>Master Bot</title>
        <link rel="canonical" href="https://masterbotwebsitemain.gatsbyjs.io" />
      </Helmet>
      <App />
      <GlobalStyles />
    </>
  );
};

export default IndexPage;
