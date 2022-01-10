const calcRem = (px: number) => `${px / 16}rem` as const;
const makeMedia = (minWidth: number) => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

const colors = {
  grayOne: "#F7F7F7",
  grayTwo: "#E5E5E5",
  grayThree: "#999999",
  grayFour: "#737373",
  blackOne: "#1c1c1c",
  blackTwo: "#111",
  pointColorYello: "#ffc114",
  pointColorCarrot: "#ff5248",
  pointColorMint: "#19cdca",
  pointColorBlue: "#4e80e1",
  lightblue: "#C5E2EE",
  footerColor: "#313131",
  mainColor: "#E7286A",
  waringColor: "#ff0000",
  starColor: "#fd4",
  purple: "#7027A0",
} as const;

const fontSizes = {
  xsmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  xxxxl: calcRem(16 * 2),
} as const;

const paddings = {
  xxsmall: calcRem(4),
  xsmall: calcRem(6),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  global: calcRem(16 * 6),
} as const;

const margins = {
  xxsmal: calcRem(4),
  xsmal: calcRem(6),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  global: calcRem(16 * 6),
} as const;

const deviceSizeUnits = {
  mobileS: 320,
  mobileM: 450,
  mobileL: 576,
  tablet: 768,
  desktop: 922,
  tabletL: 1024,
  fullScreen: 1980,
} as const;

const media = {
  mobileM: makeMedia(deviceSizeUnits.mobileM),
  mobileL: makeMedia(deviceSizeUnits.mobileL),
  tablet: makeMedia(deviceSizeUnits.tablet),
  desktop: makeMedia(deviceSizeUnits.desktop),
  tabletL: makeMedia(deviceSizeUnits.tabletL),
  fullscreen: makeMedia(deviceSizeUnits.fullScreen),
};

export const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  deviceSizeUnits,
  media,
  makeMedia,
};

export type ThemeType = typeof theme;
