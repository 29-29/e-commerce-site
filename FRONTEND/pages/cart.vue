<script setup lang="ts">
import type { CartBooking } from '~/models/CartBooking';
import type { CartItem } from '~/models/CartItem';

const cart = [
	{
		cartBookingId: 1,
		itemId: 2,
		userId: 1,
		quantity: 2
	}
] satisfies CartBooking[]
</script>

<template>
	<div class="flex flex-col gap-3 p-3">
		<div class="flex gap-2 items-center">
			<h1 class="text-3xl font-bold">Your Cart</h1>
			<UBadge label="1" size="xl" class="font-semibold rounded-full" variant="soft" />
		</div>
		<USeparator />
		<CartItem v-for="cartItem in cart" :item="cartItem" />
		<div>
		</div>
	</div>
</template>