import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/pwa',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 500, 700],
		},
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
