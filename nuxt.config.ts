// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  components: [
    { path: '~/components/special-components', prefix: 'Special' },
    '~/components/'
  ]
})
