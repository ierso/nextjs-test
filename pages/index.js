import React from "react";
import App from "../container/app";
import Head from "next/head";
import { Container } from "../components/styled-elements/layout";
import cowsay from "cowsay-browser";
import styled from "@emotion/styled";
import { keyframes, css, Global } from "@emotion/core";

const basicStyle = css`
  padding: 2em 0;
`;

const Basic = styled.div`
  ${basicStyle};
  background: ${props => props.theme.type.colors.primary};
  color: blue;
  border: black dashed 2px;
`;

const Home = props => {
  return (
    <App>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Basic>
        <Container width={{ test: "okay" }}>
          <h1>Home Page</h1>
          <h2>message</h2>
        </Container>
      </Basic>
      <Container>
        <pre>{cowsay.say({ text: "hi there!" })}</pre>
      </Container>
    </App>
  );
};

export default Home;
