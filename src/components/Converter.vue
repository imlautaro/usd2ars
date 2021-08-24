<template>
	<div
		class="bg-white flex items-center space-x-4 p-6 rounded-t-2xl shadow-lg"
	>
		<div class="flex flex-1 flex-col w-full">
			<span class="text-gray-600">Conversor</span>
			<div class="flex items-center space-x-2">
				<span class="text-4xl">$</span>
				<input
					v-model.number="quantity"
					class="bg-transparent flex-1 text-4xl w-full"
					type="number"
				/>
			</div>
		</div>
		<button
			@click="convertToUsd = !convertToUsd"
			class="border flex items-center justify-center px-4 py-2 rounded-full space-x-2"
		>
			<span>{{ convertToUsd ? 'ARS' : 'USD' }}</span>
			<i class="ph-arrow-right-bold"></i>
			<span>{{ convertToUsd ? 'USD' : 'ARS' }}</span>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useConverter from '~/composables/converter'

export default defineComponent({
	setup() {
		const { convert, convertToUsd, quantity } = useConverter()
		return { convert, convertToUsd, quantity }
	},
})
</script>
