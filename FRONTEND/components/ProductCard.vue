<script setup lang="ts">
import type { Item } from '~/models/Item';

const props = defineProps<{
	item: Item
}>()
</script>

<template>
	<UCard variant="subtle" class="flex flex-col">
	<!-- <div class="p-3 w-full h-full inline-block border border-gray-200 shadow-lg flex flex-col flex-grow justify-between"> -->
		<img :src="props.item.images[0]" class="aspect-square w-full object-contain" />
		<div class="px-1 py-1">
			<h3 class="truncate text-lg font-semibold">{{ props.item.title }}</h3>
			<div class="flex items-center gap-2 text-primary" style="width: 50%;">
				<UProgress v-model="props.item.rating" :max="5" />
				<span>{{ props.item.rating }}</span>
				<UIcon name="i-lucide-star" class="size-7" />
			</div>
			<p class="text-green-700 font-bold">${{ props.item.price }}</p>
		</div>
		<div class="grid grid-flow-col text-center gap-2">
			<UButton block label="View" variant="outline" :to="`/shop/${props.item.id}`" />
			<UButton block label="Add to Cart" icon="i-lucide-plus" />
		</div>
	</UCard>
	<!-- </div> -->
</template>