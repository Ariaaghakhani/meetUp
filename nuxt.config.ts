// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/Aura'
import { definePreset } from '@primevue/themes'
import {palette} from "@primeuix/styled";

const prColor= palette('#4457ff')

const MyPreset = definePreset(Aura,{
  semantic:{
    primary:{
      50: prColor[50],
      100: prColor[100],
      200: prColor[200],
      300: prColor[300],
      400: prColor[400],
      500: prColor[500],
      600: prColor[600],
      700: prColor[700],
      800: prColor[800],
      900: prColor[900],
      950: prColor[950],
    }
  }
})
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer:{
    host:"0.0.0.0",
    port:4000,
  },
  app:{
    head:{
      title:'MeetUp',
      htmlAttrs:{
        dir:"rtl"
      }
    },
    // pageTransition: { name: 'rotate',mode:'out-in'},
  },
  modules:['@vite-pwa/nuxt','@primevue/nuxt-module'],
  pwa: {
    manifest: {
      name: "MeetUp",
      short_name: "MeetUp",
      description: "A Nuxt 3 Progressive Web App",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      icons: [
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
      globDirectory: ".output/public", // Change to a valid directory
    },
    registerType: "autoUpdate",
    devOptions: {
      enabled: false, // Enable PWA in dev mode
    },
  },
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.dark',
          cssLayer: false
        },
        button:{
          primary:{
            background:"#4457ff"
          }
        }
      }
    }
  },
})
