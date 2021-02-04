const backgroundColor = "#0A1222";
const foregroundColor = "#D6D9E0";
const cursorColor = "#ecc48d";
const borderColor = "#070E1B";

const colors = {
  black: backgroundColor,
  red: "#f87086",
  green: "#BBD99E",
  yellow: "#ecc48d",
  blue: "#8EACE3",
  magenta: "#c792ea",
  cyan: "#92D8E6",
  white: foregroundColor,
  lightBlack: "#3D485F",
  lightRed: "#f87086",
  lightGreen: "#C9E2AF",
  lightYellow: "#ffe2a9",
  lightBlue: "#ACD1F5",
  lightMagenta: "#CCB3FF",
  lightCyan: "#A5E0EC",
  lightWhite: "#F2F2F2",
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors,
    cursorColor: config.cursorColor || cursorColor,
    termCSS: `
      ${config.termCSS || ""}
      ::selection {
        background: ${foregroundColor} !important
      }
    `,
    css: `
      ${config.css || ""}
      ::selection {
        background: ${foregroundColor} !important
      }
    `,
  });
};
