// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    router: {
        options: {
            scrollBehaviorType: 'instant'
        }
    },
    server: {
        host: 0,
        port: '3000'
    },

    css: [
        '~/assets/css/main.css',
        '~/assets/css/tailwind.css',
        '~/assets/css/normalize.css',
        '~/assets/css/custom.css',
    ],
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
            baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
            baseUrlFront: process.env.NUXT_PUBLIC_BASE_URL_FRONT,
            filesBaseUrl: process.env.NUXT_PUBLIC_FILES_BASE_URL,
            metrikaId: process.env.NUXT_YANDEX_METRIKA_ID,
            backendHost: process.env.NUXT_PUBLIC_BACKEND_HOST
        }
    },
    app: {
        head: {
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" },
                { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
            ],
            meta: [
                { name: "msapplication-TileColor", content: "#2b5797" },
                { name: "theme-color", content: "#ffffff" }
            ],
        },
    },
    modules: ['nuxt-swiper', '@nuxtjs/tailwindcss', 'nuxt-rating', 'nuxt-schema-org', '@nuxtjs/sitemap'],
    // serverMiddleware: [
    //     { path: '/', handler: '~/middleware/redirect.global.ts' },
    // ],
    auth: {
        provider: {
            type: 'authjs'
        }
    },
    site: {
        url: 'https://avitsenna.uz',
        sitemaps: true,
        trailingSlash: false,
        enabled: true,
        name: 'Avitsenna uz'
    },
    sitemap: {
        sources: [
            '/api/_sitemap-urls'
        ],
        exclude: ['/preview-post/**', '/preview/**']
    },
    i18n: {
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'uz',
        locales: [
            {
                code: 'uz',
                file: 'uz.json',
                lang: 'uz-UZ',
                short_name: "O'zb",
                name: "O’zbekcha"
            }
        ],
    },
    components: {
        dirs: [
            {path: '~/components/base'},
            {path: '~/components/desktop', prefix: 'desktop'},
            {path: '~/components/mobile', prefix: 'mobile'},
            // home components
            {path: '~/modules/home/components/base', prefix: 'home'},
            {path: '~/modules/home/components/desktop', prefix: 'home-desktop'},
            {path: '~/modules/home/components/mobile', prefix: 'home-mobile'},
            // home sections
            {path: '~/modules/home/sections', prefix: 'home-section'},
            // post components
            {path: '~/modules/post/components/base', prefix: 'post'},
            {path: '~/modules/post/components/desktop', prefix: 'post-desktop'},
            {path: '~/modules/post/components/mobile', prefix: 'post-mobile'},
            // post sections
            {path: '~/modules/post/sections', prefix: 'post-section'},
        ]
    }
})
