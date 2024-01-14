/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        //color del nav azul crece media
        nav: "#38B6FF",
        page: "#d9d9dd", //color gris de la pagina
        card: "#92c5fc", //azulk cielo tarjeta
        "card-hover": "#0097b2",
        "default-text": "#f1f3f5",
        "blue-accent": "#0084d4", //cuando creamos un ticket nuevo
        "blue-accent-hover": "#009ff",
      },
    },
  },
  plugins: [],
};
