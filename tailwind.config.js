module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://thisisgrow-wp-assets-prod.storage.googleapis.com/wp-content/uploads/2022/02/18172920/Home_Small-Thanks-1.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
