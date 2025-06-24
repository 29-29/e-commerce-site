<script setup lang="ts">

import type { Item } from '~/models/Item';

const items: Item[] = [
	{
		id: 1,
		name: 'Gatorade',
		stars: 3.5,
		price: 50
	}
]

</script>

<template>
	<div>
		<h2 class="text-3xl text-bold text-center">Shop</h2>
		<ProductCard :item="items[0]" />
	</div>
</template>