// tailwind.config.js

module.exports = {
  // mode: "jit",
  // purge: [
  //   "./components/**/*.js",
  //   "./components/*.js",
  //   "./pages/**/*.js",
  //   "./pages/*.js",
  // ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffff",
        secondary: "#ff00ff",
        //Greys
        "cool-dark": "#222831",
        "light-gray": "#E5E7EB",
        "base-gray": "#D1D5DB",
        "dark-gray": "#9CA3AF",
        "dark-blue-gray": "#94A3B8",
        "blue-gray": "#CBD5E1",
        "light-blue-gray": "#E2E8F0",
        //Purps
        "purple-gray": "#393b44",
        "purple": "#2D2A50",
        "light-purple": "#403D60",
        //Lavender
        "lavender": "#BBB3D4",
      },
      fontFamily: {
        poiretone: ["Poiret One", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        gruppo: ["Gruppo", "cursive"],
      },
      fontSize: {
        'h1': '60px',
        'h2': '55px',
        'h3': '45px',
        'h4': '36px',
        'h5': '28px',
        'h6': '26px',
      },
      minHeight: {
        hero: "200px",
      },
      screens: {
        '2xl-max': {'max': '1535px'},
        'xl-max': {'max': '1279px'},
        'lg-max': {'max': '1023px'},
        'md-max': {'max': '767px'},
        'sm-max': {'max': '639px'},
      },
      height: {
        "100": "100px",
        "200": "200px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
      },
      minHeight: (theme) => ({ ...theme("height"), hero: "200px" }),
    },
  },
  variants: {
    extend: {
      minHeight: ["responsive"],
    },
  },
};
