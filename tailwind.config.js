/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "submenu-md": "500px",
        "submenu-lg": "700px",
        "submenu-xl": "900px",
      },
      height: {
        slide: "490px",
        slide1: "470px  ",
        slide2: "350px",
        silde3: "450px",
      },
      weight: {
        wslide: "700px",
      },
    },
  },

  plugins: [],
};
