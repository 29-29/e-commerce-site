<script setup lang="ts">
import type { Item } from '~/models/Item';

const props = defineProps<{
	item: Item
}>()

</script>

<template>
	<div class="p-3 inline-block min-w-min border border-gray-400 rounded-md">
		<img src="@/assets/images/shirt.avif" />
		<h3 class="text-lg font-semibold">{{ props.item.name }}</h3>
		<p>₱{{ props.item.price }}</p>
	</div>
</template>