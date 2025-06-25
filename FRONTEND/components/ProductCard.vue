<script setup lang="ts">
import type { Item } from '~/models/Item';

const props = defineProps<{
	item: Item
}>()
</script>

<template>
	<UCard variant="solid" class="flex flex-col justify-between">
	<!-- <div class="p-3 w-full h-full inline-block border border-gray-200 shadow-lg flex flex-col flex-grow justify-between"> -->
		<img :src="props.item.images[0]" class="aspect-square w-full object-contain" />
		<div class="px-1 py-1">
			<h3 class="truncate text-lg font-semibold">{{ props.item.title }}</h3>
			<div class="flex items-center gap-2">
				<UProgress v-model="props.item.rating" :max="5" />
				<span class="text-primary">{{ props.item.rating }}</span>
			</div>
			<p class="text-green-700 font-bold">${{ props.item.price }}</p>
		</div>
	</UCard>
	<!-- </div> -->
</template>