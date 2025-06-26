<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/'
  },
  {
    label: 'Shop',
    icon: 'i-lucide-store',
    to: '/shop'
  },
  {
    label: 'About',
    icon: 'i-lucide-circle-alert',
    to: '/about'
  },
  {
    label: 'Contact',
    icon: 'i-lucide-phone',
    to: '/contact'
  }
] satisfies NavigationMenuItem[]
</script>

<template>
  <div>
    <div class="px-4 flex flex-row items-center gap-2">
      <NuxtLink to="/" class="text-xl">Shop</NuxtLink>
      <UNavigationMenu :items="items" :highlight="true" class="w-full border-gray-600" />
    </div>
    <USeparator />
    <NuxtPage class="m-2" />
  </div>
</template>
