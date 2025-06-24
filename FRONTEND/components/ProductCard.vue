<script setup lang="ts">
import type { Item } from '~/models/Item';

const props = defineProps<{
	item: Item
}>()
</script>

<template>
	<div class="p-3 inline-block border border-gray-200 shadow-lg rounded-md">
		<img :src="`/images/${props.item.imagePath}.avif`" />
		<div class="px-1 py-1">
			<h3 class="text-lg font-semibold">{{ props.item.name }}</h3>
			<p>₱{{ props.item.price }}</p>
		</div>
	</div>
</template>