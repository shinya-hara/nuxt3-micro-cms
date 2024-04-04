<script setup lang="ts">
const items = [{ title: "Home", to: "/" }];
</script>

<template>
  <header class="bg-indigo-600">
    <nav class="">
      <div class="flex justify-between h-12">
        <div class="flex">
          <div class="ml-6 flex gap-x-4">
            <NuxtLink
              v-for="item in items"
              :to="item.to"
              :key="item.to"
              class="grid place-items-center hover:bg-indigo-700 hover:text-white px-3 text-gray-300 text-sm font-medium"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
