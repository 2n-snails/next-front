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

    // secondary color (red)
    secondary_1: "#ffafa0",
    secondary_2: "#ffa796",
    secondary_3: "#ff9f8d",
    secondary_4: "#ff9783",
    secondary_5: "#ff8f7a",
    secondary_6: "#ff8770",
    secondary_7: "#ff7258",
    secondary_8: "#ff5e3f",
    secondary_9: "#ff4927",
    secondary_10: "#ff350e",

    // primary color (blue)
    primary_1: "#d4e3ff",
    primary_2: "#b8d0ff",
    primary_3: "#a9c7ff",
    primary_4: "#9bbdff",
    primary_5: "#8db4ff",
    primary_6: "#70a1ff", // blue_aa -> primary_6
    primary_7: "#4b89ff",
    primary_8: "#2a73ff",
    primary_9: "#0c5fff",
    primary_10: "#0052f0",

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
