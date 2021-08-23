import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/pwa',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	firebase: {
		config: {
			apiKey: 'AIzaSyCFsl2PwsWe5-mFs1aVpMuyxdOgSWpxh1A',
			authDomain: 'usd2ars.firebaseapp.com',
			projectId: 'usd2ars',
			storageBucket: 'usd2ars.appspot.com',
			messagingSenderId: '279287000046',
			appId: '1:279287000046:web:9a7e885921458456bdfcff',
			measurementId: 'G-RBFK2167FQ',
		},
		services: {
			analytics: true,
		},
	},
	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 500, 700],
		},
	},
	head: {
		script: [{ src: 'https://unpkg.com/phosphor-icons' }],
	},
	modules: ['@nuxtjs/firebase', '@nuxt/http'],
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
