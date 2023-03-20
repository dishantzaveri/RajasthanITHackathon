export const COLORS = {
  primary: "#E24748",
  secondary: "#ABD0DA",

  white: "#FFF",
  gray: "#ABD0DA",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: require("../assets/fonts/Inter-Bold.ttf"),
  semiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
  medium: require("../assets/fonts/Inter-Medium.ttf"),
  regular: require("../assets/fonts/Inter-Regular.ttf"),
  light: require("../assets/fonts/Inter-Light.ttf"),
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
