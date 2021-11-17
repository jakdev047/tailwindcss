module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primaryColor: "#3e3f48",
        secondaryColor: "#00c614",
        bodyColor: "#f2f2f3",
        menuColor: "#6b6c72",
        placeholderColor: "#88898e",
        warning: "#fdf4ed",
        wraningBg: "#F58A28",
        error: "#F52828",
      },
      textColor: (theme) => theme("colors"),
      fontSize: {
        // [fontSize, { letterSpacing, lineHeight }]
        13: [
          "13px",
          {
            letterSpacing: "0.02em",
            lineHeight: "20px",
          },
        ],
        14: [
          "14px",
          {
            letterSpacing: "0.02em",
            lineHeight: "17px",
          },
        ],
        16: [
          "16px",
          {
            letterSpacing: "-0.01em",
            lineHeight: "24px",
          },
        ],
        20: ["20px", "32px"],
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      width: {
        32: "32px",
        w64: "64px",
        w100: "100px",
        w120: "120px",
        w130: "130px",
        w160: "160px",
      },
      height: {
        h72: "72px",
        h64: "64px",
        h40: "40px",
        32: "32px",
      },
      borderRadius: {},
      padding: {
        
      },
    },
    screens: {
      desktop: {'max': '1599px'},

      laptop: {'max': '1199px'},

      tablet: {'max': '991px'},

      'sm': {'max': '776px'},

      mobile: {'max': '400px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
