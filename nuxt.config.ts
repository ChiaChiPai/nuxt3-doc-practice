// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  components: [
    { path: '~/components/special-components', prefix: 'Special' },
    '~/components/'
  ],
  experimental: {
    componentIslands: true
  }
})
