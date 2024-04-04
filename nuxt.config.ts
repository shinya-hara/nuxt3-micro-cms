// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      microCMS: {
        serviceDomain: process.env.NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.NUXT_PUBLIC_MICROCMS_API_KEY,
      },
    },
  },

  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  },

  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/typography")],
    },
  },
});
