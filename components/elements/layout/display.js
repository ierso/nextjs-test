import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { mq, toMediaObj } from "../../../utils/style-utils";

// prettier-ignore
const toDisplayCss = (hide, show) => {
  if (hide) return "display: none;";
  if (typeof show === "boolean" || !show) show = "inline";
  return `display: ${show};`;
};

// prettier-ignore
const getCss = ({ hide, show, theme }) => {
  const { xs: xsHide, sm: smHide, md: mdHide, lg: lgHide, xl: xlHide } = toMediaObj(hide || false);
  const { xs: xsShow, sm: smShow, md: mdShow, lg: lgShow, xl: xlShow } = toMediaObj(show || false);
  const breakpoints = [[smHide, smShow], [mdHide, mdShow], [lgHide, lgShow], [xlHide, xlShow]];

  let isHideFirst = Boolean(xsHide);
  if (!isHideFirst) {
    breakpoints.some(([bHide, bShow]) => {
      if (bHide || bShow) {
        isHideFirst = !!bShow;
        return true;
      }
      return false;
    });
  }

  return css`
    ${xsShow ? toDisplayCss(false, xsShow) : isHideFirst ? 'display: none;' : null}
    ${(smHide || smShow) && `${mq[1]}{ ${toDisplayCss(smHide, smShow)} }`}
    ${(mdHide || mdShow) && `${mq[2]}{ ${toDisplayCss(mdHide, mdShow)} }`}
    ${(lgHide || lgShow) && `${mq[3]}{ ${toDisplayCss(lgHide, lgShow)} }`}
    ${(xlHide || xlShow) && `${mq[4]}{ ${toDisplayCss(xlHide, xlShow)} }`}
  `;
}

const Display = styled.span`
  ${props => getCss(props)};
`;

export default Display;
