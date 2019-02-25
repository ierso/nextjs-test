export { default as Text } from "./text";

import theme from "../../../utils/theme";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mq } from "../../../utils/style-utils";

const defaultSettings = props => css`
  margin: 0;
  font-size: 1rem;
  line-height: calc(1rem * 1.5);
  @media (min-width: ${theme.type.breakpoints.lg}) {
    font-size: 1.17rem;
    line-height: calc(1.17rem * 1.5);
  }
`;

const dynamicSettings = props => css`
  margin: 0;
  font-size: ${props.size ? `${props.size}rem` : ``};
  line-height: ${props.size ? `calc(${props.size}rem * 1.5)` : ``};
  @media (min-width: ${theme.type.breakpoints.lg}) {
    font-size: ${props.sizeDesktop ? `${props.sizeDesktop}rem` : ``};
    line-height: ${props.sizeDesktop
      ? `calc(${props.sizeDesktop}rem * 1.5)`
      : ``};
  }
`;

const Copy = styled.p`
  ${defaultSettings}
  margin: 0 0 1rem 0;
`;

const Title = styled.h1`
  ${dynamicSettings}
  color: hotpink;
  margin-bottom: 1rem;
`;

export { Copy, Title };
