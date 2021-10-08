export const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

export const theme = {
  color: {
    // greyscale color (gray)
    greyscale_1: "#f2f3f4",
    greyscale_2: "#d9dcdd", // gray_cc -> greyscale_2
    greyscale_3: "#cdd0d2",
    greyscale_4: "#c0c4c6",
    greyscale_5: "#a7adb0", // gray_bb -> greyscale_5
    greyscale_6: "#81898e",
    greyscale_7: "#484d50", // gray_aa -> greyscale_7
    greyscale_8: "#383c3f",
    greyscale_9: "#292c2e",
    greyscale_10: "#242628",
    greyscale_11: "#131515",
    greyscale_12: "#0e0f10",

    // secondary color (orange)
    secondary_1: "#fed7ac",
    secondary_2: "#fec788",
    secondary_3: "#fdb76a",
    secondary_4: "#fda748",
    secondary_5: "#fc9727",
    secondary_6: "#fc8706",
    secondary_7: "#ee7e03",
    secondary_8: "#cc6c02",

    // primary color (black)
    primary: "#161616",

    black: "#222222",
    gray_6a: "#6a6a6a", // gray_dd -> gray_6a
    gray_76: "#767676",
    gray_eb: "#ebebeb",
    gray_e5: "#e5e5e5",
    dark_cyan: "#008489",
  },

  mobile: `(max-width : ${size.mobile})`,
  tablet: `(max-width : ${size.tablet})`,
  laptop: `(max-width : ${size.laptop})`,
  desktop: `(max-width : ${size.desktop}`,
};

export default theme;
