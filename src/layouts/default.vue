<template>
	<div class="flex flex-col h-screen overflow-hidden w-screen">
		<div class="flex-1 h-full overflow-y-scroll">
			<app-bar />
			<div class="grid grid-cols-2 sticky top-0">
				<button class="p-4 text-center">
					<span class="text-gray-600 dark:text-gray-400">Compra</span>
				</button>
				<button class="p-4 text-center">
					<span class="relative text-primary-600 dark:text-lime-400">
						Venta
						<div
							class="absolute bg-primary-600 dark:bg-lime-400 -bottom-2 h-0.5 left-0 rounded-full w-full"
						></div>
					</span>
				</button>
			</div>
			<nuxt />
		</div>
		<div
			class="bg-white dark:bg-gray-800 flex flex-col p-6 rounded-t-2xl shadow-lg space-y-4"
		>
			<div class="flex items-center justify-between">
				<span class="text-xl">Conversor</span>
				<button class="icon-btn">
					<i class="ph-caret-down text-2xl"></i>
				</button>
			</div>
			<div class="flex items-center space-x-4">
				<span class="text-4xl">$</span>
				<input
					class="bg-transparent text-4xl w-full"
					value="1"
					min="1"
					type="number"
				/>
				<button
					@click="convertToUsd = !convertToUsd"
					class="duration-200 flex items-center active:bg-gray-900/5 dark:active:bg-gray-100/5 space-x-2 px-4 py-2 rounded-full border dark:border-gray-700"
				>
					<transition name="convert" mode="out-in">
						<span
							key="a"
							v-if="convertToUsd"
							class="text-gray-600 dark:text-gray-400"
						>
							ARS
						</span>
						<span
							key="b"
							v-else
							class="text-gray-600 dark:text-gray-400"
							>USD</span
						>
					</transition>
					<i class="ph-arrow-right-bold"></i>
					<transition name="convert" mode="out-in">
						<span key="a" v-if="convertToUsd" class="font-medium">
							USD
						</span>
						<span key="b" v-else class="font-medium">ARS</span>
					</transition>
				</button>
			</div>
			<button class="btn btn-primary">
				Convertir
			</button>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.convert-enter-active,
.convert-leave-active {
	@apply duration-200 transform;
}
.convert-enter {
	@apply opacity-0 -translate-y-1/2;
}
.convert-leave-to {
	@apply opacity-0 translate-y-1/2;
}
</style>

<script>
export default {
	head() {
		return {
			meta: [
				{
					name: 'theme-color',
					content:
						this.$colorMode.value == 'dark' ? '#1f2937' : '#ffffff',
				},
			],
		}
	},
	data() {
		return {
			convertToUsd: false,
		}
	},
}
</script>
