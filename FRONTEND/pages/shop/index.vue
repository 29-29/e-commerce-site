<script setup lang="ts">

import type { Item } from '~/models/Item';

const { products, error, pending } = await useProducts();

</script>

<template>
	<div>
		<!-- <h2 class="my-3 text-3xl font-semibold text-center">Shop</h2> -->
		<ProductList :items="<Item[]>products" />
	</div>
</template>