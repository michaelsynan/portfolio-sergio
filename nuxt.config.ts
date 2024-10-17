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
          to: "sergiotupacuzurin@gmail.com", // Can be overridden in send calls
        },
        smtp: {
          host: "smtp.mailgun.org", // Mailgun SMTP server (fixed value, as it is not sensitive)
          port: 587, // Standard port for SMTP
          auth: {
            user: process.env.MAILGUN_SMTP_LOGIN, // Using process.env directly
            pass: process.env.MAILGUN_SMTP_PASSWORD, // Using process.env directly
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
  runtimeConfig: {
    private: {
      // Only accessible on the server side
      mailgunApiKey: process.env.MAILGUN_API_KEY,
      mailgunDomain: process.env.MAILGUN_DOMAIN,
      mailgunSender: process.env.MAILGUN_SENDER,
      mailgunSmtpLogin: process.env.MAILGUN_SMTP_LOGIN,
      mailgunSmtpPassword: process.env.MAILGUN_SMTP_PASSWORD,
    },
  },
});
