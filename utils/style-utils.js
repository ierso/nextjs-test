import PropTypes from "prop-types";
import theme from "./theme";
import { css } from "@emotion/core";

const { breakpoints } = theme.type;

const mq = Object.keys(breakpoints).map(bp => {
  return `@media (min-width: ${breakpoints[bp]})`;
});

const addTheme = props => {
  return {
    ...props,
    theme: props.theme ? { ...props.theme } : {}
  };
};

/**
 * Accept string, trim, return terminated with a semicolon
 * If input string contains all spaces or only ';', return empty string
 */

const ensureSemi = val => {
  val = val.trim();
  return val && val !== ";" ? (val.slice(-1) === ";" ? val : `${val};`) : "";
};

/**
 * Accept string or a list of strings (from SC), return a single string
 * Filter, trim, and ensure a semicolon delimiter
 */

const toCssString = val => {
  if (typeof val === "string") return ensureSemi(val);
  if (!Array.isArray(val)) return "";
  return val
    .map(el => ensureSemi(el))
    .join("")
    .trim();
};

/**
 * Helper to ensure that value is a (media) object
 */

// prettier-ignore
const toMediaObj = val => {
  if (typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean')
    return { xs: val };
  if (typeof val === "object" && Object.keys(val).length) return val;
  return {};
};

const mediaStylesPropTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ])
};

const withMediaStyles = ({ styles, theme }) => {
  if (Array.isArray(styles)) return styles;
  if (typeof styles === 'string') return css`${toCssString(styles)}`; // prettier-ignore
  if (typeof styles === "object") {
    // prettier-ignore
    return css`
    ${styles.xs && toCssString(styles.xs)}
    ${styles.sm && `${mq[1]}{${toCssString(styles.sm)}}`}
    ${styles.md && `${mq[2]}{ ${toCssString(styles.md)} }`}
    ${styles.lg && `${mq[3]}{ ${toCssString(styles.lg)} }`}
    ${styles.xl && `${mq[4]}{ ${toCssString(styles.xl)} }`}
  `;
  }

  return [];
};

export { mq, addTheme, mediaStylesPropTypes, toMediaObj, withMediaStyles };
