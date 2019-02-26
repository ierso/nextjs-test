import React, { Component } from "react";
import theme from "../utils/theme";
import FullPage from "./fullpage";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import emotionNormalize from "emotion-normalize";
import { Flex, Display } from "../components/styled-elements/layout";
import { Heading, Text } from "../components/styled-elements/typography";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${emotionNormalize}
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }
            html {
              font-size: ${theme.type.baseFontSize.htmlSize};
            }
            body {
              font-size: 1.4rem;
            }
          `}
        />
        <div style={{ fontSize: "2em" }} />
        <Flex
          styles={{
            xs: "flex-direction: column",
            md: "flex-direction: row; color: hotpink"
          }}
        >
          <Display hide={{ sm: true }} show={{ xs: true, lg: true }}>
            <Heading as="h5" h5 last styles={{ xl: "color: blue;" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              sit fugiat atque consectetur
            </Heading>
          </Display>
          <Heading as="h2" h2 last>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit
            fugiat atque consectetur
          </Heading>
          <Text last medium>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit
            fugiat atque consectetur eius doloribus, ad, aliquid nihil cum
            laboriosam impedit minus reprehenderit dicta a ducimus inventore
            quam pariatur provident?
          </Text>
        </Flex>

        <FullPage>{this.props.children}</FullPage>
      </ThemeProvider>
    );
  }
}

export default App;
