import { computed, ref, useContext, useFetch } from '@nuxtjs/composition-api'

const api = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

interface Casa {
	compra: string
	venta: string
	nombre: string
}

interface Value {
	casa: Casa
}

const useDolarsi = () => {
	const { $http } = useContext()

	const data = ref()

	const { fetch, fetchState } = useFetch(async () => {
		const response: Value[] = await $http.$get(api)

		const wantedValues = ['Dolar Oficial', 'Dolar Blue', 'Dolar turista']

		data.value = response
			.filter(({ casa }) => wantedValues.includes(casa.nombre))
			.map(({ casa }) => {
				const compra = parseFloat(
					casa.compra.replace('.', '').replace(',', '.')
				)
				const venta = parseFloat(
					casa.venta.replace('.', '').replace(',', '.')
				)
				const nombre = casa.nombre.replace('Dolar', 'Dólar')

				return { compra, venta, nombre }
			})
	})

	const format = computed(() => {
		return (price: number) => {
			if (price < 0) price = price * -1
			const [left, right] = (Math.round(price * 100) / 100)
				.toString()
				.split('.')
			const formatted = left
				.split('')
				.reverse()
				.map((letter, index) => {
					if (index !== 0 && index % 3 === 0) {
						return letter + ','
					} else {
						return letter
					}
				})
				.reverse()
				.join('')
			return right ? formatted + '.' + right : formatted
		}
	})

	return { data, fetch, fetchState, format }
}

export default useDolarsi
