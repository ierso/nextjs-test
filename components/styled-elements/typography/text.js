import styled from "@emotion/styled";
import { css } from "@emotion/core";

import {
  cssSpacing,
  withFont,
  withMediaStyles
} from "../../../utils/style-utils";

// prettier-ignore
const getCss = props => css`
  color: ${props.color};
  ${props.margin !== undefined && cssSpacing('margin', props.margin)} 
  ${withFont(props)}
  ${withMediaStyles(props)}
`

const Text = styled.p`
  ${props => getCss(props)};
`;

export default Text;
