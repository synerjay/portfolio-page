module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["Metrica"],
        first: ["Kumbh Sans"],
        second: ["Krona One"],
      },
    },
  },
  variants: {
    extend: {
      width: ["group-hover"],
    },
  },
  plugins: [],
}
