// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt3 hands on Dojo',
      meta: [
        {
          name: 'description',
          content: 'description Nuxt3 hands on Dojo'
        }
      ],
      link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY, //shar to server
    public: {
      code: 'USD'
    }//share to client
  }
})
