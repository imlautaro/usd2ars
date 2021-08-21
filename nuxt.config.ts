import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: ['@nuxt/typescript-build', '@nuxtjs/pwa', 'nuxt-windicss'],
	components: true,
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
