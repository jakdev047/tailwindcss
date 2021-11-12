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
        warning: " #fdf4ed",
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
      height: {
        h72: "72px"
      }
    },
    screens: {
      mobile: "400px",
      tablet: "800px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
