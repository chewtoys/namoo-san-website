// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'my-portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My portfolio website for netlify.' },
        { name: 'google-site-verification', content: 'h-XExxbkhpiZlqrsioKq_J8WwWTB1UhmGZwyQJWvUe4' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/favicons/favicon.ico' },
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicons/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/favicons/android-chrome-36x36.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicons/android-chrome-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/favicons/android-chrome-72x72.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/android-chrome-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicons/android-chrome-128x128.png' },
        { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicons/android-chrome-144x144.png' },
        { rel: 'icon', type: 'image/png', sizes: '152x152', href: '/favicons/android-chrome-152x152.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/favicons/android-chrome-256x256.png' },
        { rel: 'icon', type: 'image/png', sizes: '384x384', href: '/favicons/android-chrome-384x384.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/favicons/icon-36x36.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicons/icon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/favicons/icon-72x72.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/icon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicons/icon-128x128.png' },
        { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicons/icon-144x144.png' },
        { rel: 'icon', type: 'image/png', sizes: '152x152', href: '/favicons/icon-152x152.png' },
        { rel: 'icon', type: 'image/png', sizes: '160x160', href: '/favicons/icon-160x160.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicons/icon-196x196.png' },
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/favicons/icon-256x256.png' },
        { rel: 'icon', type: 'image/png', sizes: '384x384', href: '/favicons/icon-384x384.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicons/icon-512x512.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/icon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '24x24', href: '/favicons/icon-24x24.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/icon-32x32.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-135914514-1',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-135914514-1');
          `
        }
      ]
    }
  },

  css: [
    'bulma/css/bulma.css'
  ],

  routeRules: {
    '/works': {
      redirect: {
        to: 'https://works.nakashun.com',
        statusCode: 301
      }
    }
  },

  modules: []
})
