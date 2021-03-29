export const primaryColors = {
  name: ["salmon", "cyan", "purple"],
  hex: ["#ED7775", "#8FF1F5", "#CE87F1"],
};

export const primaryFonts = {
  name: ["Sofia Pro Soft", "Roboto Mono", "Kanit"],
};

const base = {
  text: "#DBDEFA",
  textGrey: "#61647B",
  bg: "#1F223E",
  bgDark: "#161A33",
  bgSecondary: "#FFFFFF",
  bgSecondaryDark: "#EFF1F9",
};

export const darkTheme = {
  ...base,
  colorPrimary: primaryColors.hex,
  fontPrimary: ["Sofia Pro Soft"],
  fontSecondary: ["sofia-pro"],
};
