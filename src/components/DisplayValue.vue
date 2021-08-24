<template>
	<div class="flex items-center justify-between">
		<div class="flex flex-col">
			<span class="text-gray-600">
				{{ name }}
			</span>
			<span v-if="format(value) == 'NaN'" class="text-4xl">
				No cotiza
			</span>
			<span v-else class="text-4xl"> $ {{ format(value) }} </span>
		</div>
		<button
			v-if="format(value) != 'NaN'"
			@click="copyText(format(value))"
			class="icon-btn"
		>
			<i class="ph-copy text-2xl"></i>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useDolarsi from '~/composables/dolarsi'

export default defineComponent({
	props: {
		name: String,
		value: Number,
	},
	setup() {
		const { format } = useDolarsi()

		const copyText = (text: string) => {
			navigator.clipboard.writeText(text)
		}

		return { copyText, format }
	},
})
</script>
