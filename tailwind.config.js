/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container: {
      center: true,
    },
    
    extend: {    //temaya ek bir özellik olarak istediğimiz fontu ekliyoruz
      fontFamily: {
        montserrat: [ 'Montserrat', 'sans-serif'],
        open: []
      }
    },
  },
  plugins: [],
}

