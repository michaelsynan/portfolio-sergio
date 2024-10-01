// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    [
      "nuxt-mail",
      {
        message: {
          to: "mikesynan@gmail.com", // Default recipient, can be overridden in send calls
        },
        smtp: {
          host: "smtp.mailgun.org", // Mailgun SMTP server
          port: 587,
          auth: {
            user: process.env.MAILGUN_SMTP_LOGIN, // Use SMTP login from environment variable
            pass: process.env.MAILGUN_SMTP_PASSWORD, // Use SMTP password from environment variable
          },
        },
      },
    ],
  ],
  css: ["/assets/css/main.css"],
  tailwindcss: {
    theme: {
      extend: {
        fontSize: {
          clamp: "clamp(4rem, 10vw, 8rem)",
        },
        fontFamily: {
          humane: ["Humane", "sans-serif"],
        },
        fontWeight: {
          black: 900,
        },
      },
    },
  },
  privateRuntimeConfig: {
    mailgunApiKey: process.env.MAILGUN_API_KEY, // only needed on the server-side
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    mailgunSmtpLogin: process.env.MAILGUN_SMTP_LOGIN,
    mailgunSmtpPassword: process.env.MAILGUN_SMTP_PASSWORD,
  },
});
