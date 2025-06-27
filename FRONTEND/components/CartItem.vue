<script setup lang="ts">
import type { CartBooking } from '~/models/CartBooking';
import type { CartItem } from '~/models/CartItem';

const props = defineProps<{
	item: CartBooking
}>()

const {data, pending} = await useProduct(props.item.itemId)
const details = data.value
const item: CartItem = {
	thumbnail: details?.images[0] || '',
	quantity: props.item.quantity,
	title: details?.title || ''
}

</script>

<template>
	<UCard variant="soft">
		<!-- <img /> -->
		<div class="flex gap-3">
			<USkeleton v-if="pending" class="w-32 h-32" />
			<img v-else :src="item.thumbnail" class="w-32 h-32" />
			<div class="flex flex-col gap-2">
				<div>
					<USkeleton v-if="pending" class="h-7 w-[250px]" />
					<span v-else class="text-xl font-semibold">{{ item.title }}</span>
				</div>
				<div>
					<USkeleton v-if="pending" class="h-4 w-[200px]" />
					<span class="flex gap-2">Quantity<UInputNumber v-model="item.quantity" class="w-28" /></span>
				</div>
			</div>
		</div>
	</UCard>
</template>