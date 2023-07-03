/** @format */

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();

theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        h1: {
          fontWeight: 500,
        },
        h2: {
          fontWeight: 500,
        },
        h3: {
          fontWeight: 500,
        },
        h4: {
          fontWeight: 500,
        },
        h5: {
          fontWeight: 500,
        },
        h6: {
          fontWeight: 500,
        },
        h7: {
          fontWeight: 500,
        },
        strong: {
          fontWeight: 500,
        },
        b: {
          fontWeight: 500,
        },
      },
    },
    // MuiButton: {
    //   contained: {
    //     fontSize: 14,
    //     lineHeight: 16 / 14,
    //     // fontWeight: 500,
    //     width: 206,
    //     padding: "12px 24px",
    //     color: "#4849d3",
    //     textTransform: "none",
    //   },
    //   outlined: {
    //     textTransform: "none",
    //   },
    // },
  },
  typography: {
    fontFamily: "NeueHaasGroteskDisp WO2",
    body1: {
      color: "#101820",
      // lineHeight: "125%",
      letterSpacing: "-0.02em",
      fontWeight: 400,
    },
    body2: {
      color: "#101820",
      // lineHeight: "125%",
      letterSpacing: "-0.02em",
      fontWeight: 400,
    },
    body3: {
      color: "#101820",
      // lineHeight: "125%",
      letterSpacing: "-0.02em",
      fontWeight: 400,
      fontSize: "12px",
    },
    h1: {
      color: "#101820",
      letterSpacing: "-0.02em",
      fontWeight: 500,
      // lineHeight: "100%",
    },

    h2: {
      color: "#101820",
      letterSpacing: "-0.02em",
      fontWeight: 500,
      lineHeight: 1,
      // lineHeight: "100%",
      // fontSize: "64px",
    },
    h3: {
      color: "#101820",
      letterSpacing: "-0.02em",
      fontWeight: 500,
      // lineHeight: "100%",
    },
    h4: {
      color: "#101820",
      letterSpacing: "-1px",
      fontWeight: 500,
      // lineHeight: "95%",
      // fontSize: "32px",
    },
    h5: {
      color: "#101820",
      fontWeight: 500,
      // lineHeight: "100%",
    },
    h6: {
      color: "#101820",
      fontWeight: 600,
      // lineHeight: "100%",
      fontSize: "18px",
    },
    overline: {
      color: "#101820",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      // lineHeight: "125%",
    },
    subtitle1Med: {
      //color: "#101820",
      letterSpacing: "-0.02em",
      // lineHeight: "125%",
      fontWeight: 500,
      // fontSize: "18px",
    },
    subtitle1: {
      color: "#101820",
      letterSpacing: "-0.02em",
      // lineHeight: "125%",
      fontWeight: 400,
      // fontSize: "18px",
    },
  },
  palette: {
    black: {
      darkSeaBlack: "#101820",
      coolGrey: "#565E63",
      stoneSilver: "#BCC9C5",
      paleSilver: "#EAF1EF",
      paragraphText: "#393E45",
      headingColor: "#000000",
    },
    googleText: { text: "#4285F4", border: "#3FA7F3" },
    primary: {
      //Lime is main
      main: "#BBF45D",
      pistachio: "#D3FF8D",
      palePistachio: "#E3FFB6",
    },
    secondary: {
      //Deep purple is main
      main: "#6D53EB",
      lightPurple: "#8070ED",
      lavender: "#9B91FF",
      lightLavender: "#B3AFFF",
      paleLavender: "#CCC9FF",
      textColor: "#00A97D",
      clickableText: "#6D53EB",
    },
    grey: {
      white: "#FFFFFF",
      deepWarmGrey: "#606060",
      warmGrey: "#8E8E8E",
      lightWarmGrey: "#D3D3D3",
      dividersColor: "#CCCCCC",
    },
    status: {
      disabledDark: "#ACACAC",
      disabledLight: "#D9D9D9",
      errorDark: "#D75257",
      errorLight: "#F2D1D2",
      warningDark: "#F0AA4B",
      warningLight: "#F7C393",
      successDark: "#18BB76",
      successLight: "#E7EFED",
    },
    background: "#ECEFF6",
  },
  custom: {
    drawerWidth: 340,
  },
  layout: {
    padding: "20px",
    //margin must remain the same as padding
    margin: "20px",
    colHeight: "50vh",
    siteHeaderHeight: "90px",
    siteHeaderHeightMobile: "64px",
  },
});

export default responsiveFontSizes(theme);
