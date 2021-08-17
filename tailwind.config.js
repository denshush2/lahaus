module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        72: "18.75rem",
        52: "13.625rem",
        40: "9.375rem",
        36: "7.188rem",
        32: "7.663rem",
        28: "7.188rem",
        24: "7.038rem",
        "4/5": "60vw",
      },
      rounded: {
        xl: "0.625rem",
      },
      inset: {
        20: "5.125rem",
        28: "7.25rem",
        44: "11.07rem",
        60: "15.75rem",
      },
      height: {
        48: "12.5rem",
      },
      margin: {
        0.5: "1.313rem",
        48: "12.5rem",
        52: "13.813rem",
      },
      colors: {
        blue: {
          light: "#EBEDFF",
          DEFAULT: "#3948FF",
        },
        green: {
          DEFAULT: "#3ECFAF",
          dark: "#012D26",
        },
        gray: {
          light: "#E5E5E5",
          DEFAULT: "#E5F0EE",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
