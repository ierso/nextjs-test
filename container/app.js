import React, { Component } from "react";
import theme from "../utils/theme";
import FullPage from "./fullpage";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import emotionNormalize from "emotion-normalize";
import { Copy, Title } from "../components/elements/typography/title";

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
            h1 {
              font-size: 16px;
            }
          `}
        />
        <div style={{ fontSize: "2em" }}>
          <Title size="1.6" sizeDesktop="3.2">
            Shevy with Emotion and React!
          </Title>
        </div>

        <Copy>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit
          fugiat atque consectetur eius doloribus, ad, aliquid nihil cum
          laboriosam impedit minus reprehenderit dicta a ducimus inventore quam
          pariatur provident?
        </Copy>
        <Copy>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit
          fugiat atque consectetur eius doloribus, ad, aliquid nihil cum
          laboriosam impedit minus reprehenderit dicta a ducimus inventore quam
          pariatur provident?
        </Copy>
        <FullPage>{this.props.children}</FullPage>
      </ThemeProvider>
    );
  }
}

export default App;
