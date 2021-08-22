import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/pwa',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/color-mode',
	],
	colorMode: {
		classSuffix: '',
	},
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
	pwa: {
		manifest: {
			name: 'USD2ARS',
			short_name: 'USD2ARS',
		},
	},
	srcDir: 'src',
	ssr: false,
	target: 'static',
}

export default config
