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
		script: [{ src: 'https://unpkg.com/phosphor-icons' }],
	},
	modules: ['@nuxt/http'],
	pwa: {
		manifest: {
			name: 'USD2ARS',
			short_name: 'USD2ARS',
		},
	},
	server: {
		host: '0.0.0.0',
	},
	srcDir: 'src',
	ssr: false,
	target: 'static',
}

export default config
