// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  css: ["~/assets/main.css"],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
