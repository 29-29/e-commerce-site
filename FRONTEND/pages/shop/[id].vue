<script setup lang="ts">
import { capitalize } from 'vue';
import type { Item } from '~/models/Item';
// import { BreadcrumbItem } from '@nuxt/ui';

const route = useRoute();
const { data, error, pending } = await useProduct(Number(route.params.id))
const item = computed(() => data.value as Item | null)
let quantity = ref(1)

const breadcrumbs = ref<BreadcrumbItem[]>([
	{
		icon: "i-lucide-shopping-cart",
		label: "Shop",
		to: "/shop"
	},
	{
		label: capitalize(item.value?.category)
		// to:
	},
	{
		label: item.value?.title
	}
])

</script>

<template>
	<div class="flex flex-col py-2 px-5 gap-5 max-w-screen-lg mx-auto">
		<div class="flex flex-row items-center gap-2">
			<UButton icon="i-lucide-arrow-left" variant="ghost" class="cursor-pointer" @click="$router.back" />
			<UBreadcrumb :items="breadcrumbs" />
		</div>
		<USeparator />
		<div class="flex flex-row gap-5 mb-5">
			<UCarousel dots v-slot="{ item }" :items="item?.images" class="border rounded-lg max-w-lg">
				<img :src="item" />
			</UCarousel>
			<div class="w-full flex flex-col gap-3" style="min-width: 50%;">
				<h1 class="text-2xl font-semibold">{{ item?.title }}</h1>
				<div class="flex flex-row items-center gap-2 text-secondary max-w-xs" style="width: 50%;">
					<UProgress v-model="data.rating" :max="5" color="secondary" />
					<span>{{ data?.rating }}</span>
					<UIcon name="i-lucide-star" class="size-6" />
				</div>
				<h2 class="text-3xl font-bold text-primary">${{ item?.price }}</h2>
				<div class="flex flex-row items-center gap-2">
					<div class="flex flex-row items-center gap-2">
						<span>Quantity</span>
						<UInputNumber 
							variant="soft" 
							size="sm" 
							v-model="quantity" 
							:min="1" 
							:max="item?.stock" />
					</div>
					<span class="text-gray-500">{{ item?.stock }} IN STOCK</span>
				</div>
				<UButton block icon="i-lucide-shopping-cart" label="Add to Cart" size="xl" />
			</div>
		</div>
		<USeparator />
		<div class="flex flex-col gap-2">
			<h1 class="text-lg font-semibold">Product Description</h1>
			<p>{{ item?.description }}</p>
		</div>
	</div>
</template>