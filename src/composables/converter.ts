import { ref } from '@nuxtjs/composition-api'

const quantity = ref(0)
const convertToUsd = ref(false)

const useConverter = () => {
	const convert = (value: number) => {
		quantity.value = value
	}

	return { convert, quantity, convertToUsd }
}

export default useConverter
