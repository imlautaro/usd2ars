<template>
	<div
		class="bg-primary-600 dark flex items-center justify-between -mx-4 p-4 rounded-xl text-white"
	>
		<div class="flex flex-col">
			<span>Conversión</span>
			<span class="text-4xl"
				>$
				{{
					convertToUsd
						? format(quantity / value)
						: format(quantity * value)
				}}</span
			>
		</div>
		<button class="icon-btn">
			<i class="ph-copy text-2xl"></i>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useDolarsi from '~/composables/dolarsi'
import useConverter from '~/composables/converter'

export default defineComponent({
	props: {
		value: Number,
	},
	setup() {
		const { format } = useDolarsi()
		const { quantity, convertToUsd } = useConverter()

		const copyText = (text: string) => {
			navigator.clipboard.writeText(text)
		}

		return { copyText, format, quantity, convertToUsd }
	},
})
</script>
