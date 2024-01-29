import twConfig from './tailwind.config'
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/tailwindcss', twConfig],
    ['@nuxtjs/google-fonts', {
      download: true,
    }],
    ['@pinia/nuxt', { storesDirs: ['./stores/**'], }],
    ['nuxt-icon', {
      size: '24px', // default <Icon> size applied
      class: 'icon', // default <Icon> class applied
    }]
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'autoprefixer': {}
    }
  },
  alias: {
    '#/': "./",
    '#components/': './components/',
    '#assets/': './assets/',
    '#pages/': './pages/'
  }
})
