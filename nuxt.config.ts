// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
