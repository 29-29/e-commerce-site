<script setup lang="ts">
import type { Item } from '~/models/Item';

defineProps<{
	items: Item[]
}>()
</script>

<template>
	<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
		<ProductCard v-for="_item in items" :item="_item" />
	</div>
</template>