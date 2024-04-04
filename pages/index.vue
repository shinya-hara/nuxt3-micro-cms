<script setup lang="ts">
import type { Blog } from "~/models/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});

const blogs = computed(() => data.value?.contents || []);
</script>

<template>
  <div class="container p-4 flex flex-col gap-4 mx-auto">
    <NuxtLink v-for="blog in blogs" :key="blog.id" :to="`/blogs/${blog.id}`">
      <div
        class="bg-white rounded-xl shadow-md overflow-hidden hover:opacity-70 transition"
      >
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              :src="
                blog.eyecatch?.url ??
                'https://placehold.jp/cccccc/ffffff/400x400.png?text=No%20Image'
              "
              alt=""
              class="h-48 w-full object-cover md:w-48"
            />
          </div>
          <div class="p-8">
            <div
              class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              {{ blog.category?.name }}
            </div>
            <div
              class="block mt-1 text-lg leading-tight font-medium text-black"
            >
              {{ blog.title }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
