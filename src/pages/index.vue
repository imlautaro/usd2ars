<template>
	<div>
		<div class="grid grid-cols-2 relative">
			<div
				:class="showCompra ? 'left-1/4' : 'left-3/4'"
				:style="{ width: showCompra ? '58.39px' : '43.27px' }"
				class="absolute bg-primary-600 bottom-0 duration-500 h-0.5 rounded-full transform -translate-x-1/2"
			></div>
			<button
				@click="showCompra = true"
				class="duration-500 px-4 py-3"
				:class="showCompra ? 'text-primary-600' : 'text-gray-600'"
			>
				<span>Compra</span>
			</button>
			<button
				@click="showCompra = false"
				class="duration-500 px-4 py-3"
				:class="showCompra ? 'text-gray-600' : 'text-primary-600'"
			>
				<span>Venta</span>
			</button>
		</div>
		<div class="grid grid-cols-1 grid-rows-1 overflow-x-hidden">
			<transition name="values">
				<div
					class="compra col-start-1 row-start-1"
					v-if="showCompra"
					key="compra"
				>
					<div
						class="px-6"
						v-for="(value, index) in data"
						:key="value.nombre"
					>
						<display-value
							class="py-4"
							:name="value.nombre"
							:value="value.compra"
						/>
						<display-conversion
							v-if="quantity && value.compra"
							:value="value.compra"
						/>
						<hr v-if="index < data.length - 1" />
					</div>
				</div>
				<div class="venta col-start-1 row-start-1" v-else key="venta">
					<div
						class="px-6"
						v-for="(value, index) in data"
						:key="value.nombre"
					>
						<display-value
							class="py-4"
							:name="value.nombre"
							:value="value.venta"
						/>
						<display-conversion
							v-if="quantity"
							:value="value.venta"
						/>
						<hr v-if="index < data.length - 1" />
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.values-enter-active,
.values-leave-active {
	@apply duration-500 transform;
}
.values-enter.compra {
	@apply -translate-x-full;
}
.values-leave-to.compra {
	@apply -translate-x-full;
}
.values-enter.venta {
	@apply translate-x-full;
}
.values-leave-to.venta {
	@apply translate-x-full;
}
</style>

<script setup>
import { ref } from '@nuxtjs/composition-api'
import useDolarsi from '~/composables/dolarsi'
import useConverter from '~/composables/converter'

const { data } = useDolarsi()
const { quantity, convertToUsd } = useConverter()

const showCompra = ref(false)
</script>
