<script setup lang="ts">
import type { Item } from '~/models/Item';

const route = useRoute();
const { data, error, pending } = await useProduct(Number(route.params.id))
const item: Item = data
let quantity = ref(1)
</script>

<template>
	<div class="flex flex-col p-5 gap-5 max-w-screen-lg mx-auto">
		<span>breadcrumb</span>
		<USeparator />
		<div class="flex flex-row gap-5">
			<UCarousel dots v-slot="{ item }" :items="item.images" class="border rounded-lg max-w-lg">
				<img :src="item" />
			</UCarousel>
			<div class="w-full flex flex-col gap-3">
				<h1 class="text-2xl font-semibold">{{ item.title }}</h1>
				<div class="flex flex-row items-center gap-2 text-secondary max-w-xs" style="width: 50%;">
					<UProgress v-model="item.rating" :max="5" color="secondary" />
					<span>{{ data?.rating }}</span>
					<UIcon name="i-lucide-star" class="size-6" />
				</div>
				<h2 class="text-3xl font-bold text-primary">${{ item.price }}</h2>
				<div class="flex flex-row items-center gap-2">
					<span class="text-neutral">Quantity</span>
					<UInputNumber variant="soft" size="sm" v-model="quantity" :min="1" />
				</div>
				<UButton block icon="i-lucide-shopping-cart" label="Add to Cart" size="xl" />
			</div>
		</div>
	</div>
</template>