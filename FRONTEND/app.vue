<script setup lang="ts">
import { UNavigationMenu } from '#components';
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

const accountItems = [
  {
    label: "Profile",
    icon: "i-lucide-user"
  },
  {
    label: "Log Out",
    icon: "i-lucide-log-out"
  }
] satisfies NavigationMenuItem[]
</script>

<template>
  <div>
    <div class="px-4 flex flex-row items-center justify-between">
      <div class="flex flex-row items-center gap-2">
        <NuxtLink to="/" class="text-xl">Shop</NuxtLink>
        <UNavigationMenu :items="items" :highlight="true" class="w-full border-gray-600" />
      </div>
      <div class="flex flex-row gap-2">
        <UButton
          label="Cart"
          icon="i-lucide-shopping-cart"
          variant="ghost"
          to="/cart"
        />
        <UPopover>
          <UButton icon="i-lucide-circle-user-round" variant="ghost" />
          <template #content>
            <UNavigationMenu :items="accountItems" orientation="vertical" class="p-1" />
          </template>
        </UPopover>
      </div>
    </div>
    <USeparator />
    <NuxtPage class="m-2" />
  </div>
</template>
