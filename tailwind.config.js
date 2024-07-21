/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
      },
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Roboto",
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199, 199, 199, 1)",
        inputShadow: "0 0 1px 1px rgba(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
};
