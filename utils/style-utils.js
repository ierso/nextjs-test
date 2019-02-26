import PropTypes from "prop-types";
import theme from "./theme";
import { css } from "@emotion/core";

const { breakpoints, fontSizes, headerSizes } = theme.type;

const mq = Object.keys(breakpoints).map(bp => {
  return `@media (min-width: ${breakpoints[bp]})`;
});

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
 * Return strings as-is, coerce numbers to 'rem' (default '0rem')
 */
// prettier-ignore
const toCssUnits = (val, units = 'rem') => {
  return typeof val === 'string' ? val : typeof val === 'number' ? `${val}${units}` : '0rem';
}

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

/**
 * Deliver CSS 'padding' or 'margin' rules derived from passed in prop
 * Numbers are assumed to be 'rem'
 */
const cssSpacing = (rule, value) => {
  console.log(value);
  console.log(typeof value);
  if (typeof value === "number") value += "rem";
  return css`
    ${rule}: ${value};
  `;
};

const mediaStylesPropTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ])
};

const fontPropTypes = {
  inline: PropTypes.bool,

  roman: PropTypes.bool,
  italic: PropTypes.bool,
  oblique: PropTypes.bool,

  xxSmall: PropTypes.bool,
  xSmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xLarge: PropTypes.bool,
  xxLarge: PropTypes.bool,
  larger: PropTypes.bool,
  smaller: PropTypes.bool,

  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,

  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export { fontPropTypes };

export function withFont(props, type) {
  // prettier-ignore
  let fontStyle = ['roman', 'italic', 'oblique'].find(style => style in props) || '';
  if (fontStyle === "roman") fontStyle = "normal";

  // prettier-ignore
  const fontWeight =
    ['light', 'lighter', 'normal', 'bold', 'bolder'].find(weight => weight in props) || '';

  let themeSizes = {};

  switch (type) {
    case "heading":
      themeSizes = headerSizes;
      break;
    case "text":
      themeSizes = fontSizes;
    default:
      break;
  }

  const fontSize = props.size
    ? toCssUnits(props.size)
    : themeSizes[Object.keys(themeSizes).find(size => size in props)] || "1rem";

  // prettier-ignore
  return css`
    ${props.inline && `display: inline;`}
    ${props.underline && 'text-decoration: underline;'}
    ${props.last && 'margin: 0;'}
    font-size: ${fontSize}; 
    font-style: ${fontStyle}; 
    font-weight: ${fontWeight};
    line-height: calc(${fontSize} * 1.5);
  `
}

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

export { cssSpacing, mediaStylesPropTypes, mq, toMediaObj, withMediaStyles };
