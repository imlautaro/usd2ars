import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/pwa',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/composition-api/module',
	],
	components: true,
	css: ['~/assets/css/main.css'],
	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 500, 700],
		},
	},
	head: {
		link: [
			{
				rel: 'canonical',
				href: 'https://usd2ars.nuxt.club/',
			},
		],
		script: [{ src: 'https://unpkg.com/phosphor-icons' }],
	},
	modules: ['@nuxt/http'],
	pwa: {
		meta: {
			name: 'Convertir dólar a peso argentino | Oficial, Blue y Turista',
			description:
				'Mirá los diversos valores del dólar hoy. Hacé la conversión al instante de USD a ARS o ARS a USD. Instalá la app gratis y sin anuncios ✅.',
			ogHost: 'https://usd2ars.nuxt.club',
			ogImage: '/featured.png',
		},
		manifest: {
			name: 'USD2ARS',
			short_name: 'USD2ARS',
			lang: 'es',
		},
	},
	router: {
		trailingSlash: true,
	},
	server: {
		host: '0.0.0.0',
	},
	srcDir: 'src',
	ssr: false,
	target: 'static',
}

export default config
