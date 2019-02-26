import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import {
  fontPropTypes,
  cssSpacing,
  withFont,
  withMediaStyles
} from "../../../utils/style-utils";
import Header from "../../header";

// prettier-ignore
const getCss = props => css`
  color: ${props.color};
  line-height: ${props.lineHeight};
  ${props.margin !== undefined && cssSpacing('margin', props.margin)} 
  ${withFont(props, 'heading')}
  ${withMediaStyles(props)}
`

const Heading = styled.h1`
  ${props => getCss(props)};
`;

const propTypes = {
  color: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ...fontPropTypes
};

export default Heading;
