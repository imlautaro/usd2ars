import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const config = defineConfig({
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: colors.green,
			},
		},
	},
})

export default config
