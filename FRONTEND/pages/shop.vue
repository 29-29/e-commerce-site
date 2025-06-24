<script setup lang="ts">

import type { Item } from '~/models/Item';

const items: Item[] = [
	{
		id: 1,
		name: 'Shirt',
		stars: 3.5,
		price: 50,
		imagePath: 'shirt'
	},
	{
		id: 2,
		name: 'Knit Hoodie',
		stars: 4.5,
		price: 50,
		imagePath: 'knit hoodie'
	},
	{
		id: 3,
		name: 'Sweat Hoodie',
		stars: 4.5,
		price: 50,
		imagePath: 'sweat hoodie'
	},
	{
		id: 4,
		name: 'Sweater',
		stars: 4.5,
		price: 50,
		imagePath: 'sweater'
	},
	{
		id: 5,
		name: 'Zip-Hoodie',
		stars: 4.5,
		price: 50,
		imagePath: 'zip-hoodie'
	},
]

</script>

<template>
	<div>
		<h2 class="my-3 text-3xl font-semibold text-center">Shop</h2>
		<ProductList :items="items" />
	</div>
</template>