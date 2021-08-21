import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const config = defineConfig({
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				primary: colors.green,
			},
		},
	},
})

export default config
