import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import {
  mediaStylesPropTypes,
  withMediaStyles
} from "../../../utils/style-utils";

const getCss = props => {
  return css`
    display: ${props.inline ? "inline-flex" : "flex"};
    flex-direction: ${props.flexDirection};
    flex-wrap: ${props.flexWrap};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    align-content: ${props.alignContent};
    ${withMediaStyles(props)}
  `;
};

const FlexStyled = styled.div`
  ${props => getCss(props)};
`;

const Flex = props => {
  const { children } = props;

  return <FlexStyled {...props} />;
};

const propTypes = {
  inline: PropTypes.bool,
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around"
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),
  ...mediaStylesPropTypes
};

export default Flex;
