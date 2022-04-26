export const COLORS = {
  background: `240 8% 9%`,
  headline: `60 100% 100%`,
  paragraph: `214 16% 64%`,
  button: `255 83% 65%`,
  buttonText: `60 100% 100%`,
  stroke: `0 0% 0%`,
  tertiary: `155 61% 44%`,
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
