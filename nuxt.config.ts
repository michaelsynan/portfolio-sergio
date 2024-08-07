// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['/assets/css/main.css'],
  tailwindcss: {
    theme: {
      extend: {
        fontFamily: {
          humane: ['Humane', 'sans-serif'],
        },
        fontWeight: {
          black: 900,
        },
      },
    },
  }
})