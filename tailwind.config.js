module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["forest"],
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
};
