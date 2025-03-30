import tailwindRtl from 'tailwindcss-rtl'
import PrimeUi from 'tailwindcss-primeui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        'dipo-black':'#141414',
        'erie':"#212529",
        'onyx':"#343A40",
        'space':"#495057",
        'french':"#ADB5BD",
        'french-gray':"#CED4DA",
        'platinum':"#DEE2E6",
        'anti-flash':"#E9ECEF",
        'salt':"#F8F9FA",
        'prblue':"#4457ff",

      },
      fontFamily:{
        danaReg:'danaReg',
        danaBold:'danaBold',
        danaBlack:"danaBlack",
        danaMed:"danaMed",
        danaDemi:"danaDemi",
        danaExtra:"danaExtra",
        danaThin:"danaThin",
      },
      backgroundImage:{
        landing:"url('~/assets/images/landing.png')",
      }
    },
  },
  plugins: [tailwindRtl,PrimeUi],
}

