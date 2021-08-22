<template>
	<div class="flex justify-between items-center p-4 z-20">
		<div class="icon-btn invisible">
			<i class="ph-atom text-2xl"></i>
		</div>
		<div class="flex items-center space-x-2">
			<img src="/isotype.svg" />
			<span class="font-bold text-2xl">USD2ARS</span>
		</div>
		<div class="relative">
			<button class="icon-btn" @click="menu = !menu">
				<i class="ph-dots-three-vertical text-2xl"></i>
			</button>
			<transition name="dropdown">
				<div
					v-if="menu"
					class="absolute z-20 right-0 top-full bg-white dark:bg-gray-800 shadow-lg overflow-hidden rounded-2xl"
				>
					<button
						class="duration-200 active:bg-gray-900/5 p-4 whitespace-nowrap flex items-center justify-between w-full text-left"
					>
						<div class="flex items-center space-x-4">
							<i class="ph-github-logo text-2xl"></i>
							<span>Ver en GitHub</span>
						</div>
						<i class="ph-arrow-square-out text-2xl"></i>
					</button>
					<button
						class="duration-200 active:bg-gray-900/5 p-4 whitespace-nowrap flex items-center w-full text-left"
					>
						<div class="flex items-center space-x-4">
							<i class="ph-share text-2xl"></i>
							<span>Compartir</span>
						</div>
					</button>
					<div
						class="p-4 whitespace-nowrap flex items-center space-x-8"
					>
						<div class="flex items-center space-x-4">
							<i class="ph-moon text-2xl"></i>
							<span>Modo oscuro</span>
						</div>
						<ui-switch
							:active="$colorMode.value == 'dark'"
							@change="
								$colorMode.preference =
									$colorMode.value == 'dark'
										? 'light'
										: 'dark'
							"
						/>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.dropdown-enter-active,
.dropdown-leave-active {
	@apply duration-200 origin-top-right transform;
}
.dropdown-enter,
.dropdown-leave-to {
	@apply opacity-0 scale-95;
}
</style>

<script>
export default {
	data() {
		return {
			test: false,
			menu: false,
		}
	},
}
</script>
