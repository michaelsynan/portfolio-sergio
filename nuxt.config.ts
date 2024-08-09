// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['/assets/css/main.css'],
  tailwindcss: {
    theme: {
      extend: {
        fontSize: {
          clamp: 'clamp(4rem, 10vw, 8rem)',
        },
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