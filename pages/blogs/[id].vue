<script setup lang="ts">
import type { Blog } from "~/models/blog";

const config = useRuntimeConfig();
const route = useRoute();
const blogId =
  typeof route.params.id === "string" ? route.params.id : route.params.id[0];

const { data: blog } = useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: blogId,
});

useSeoMeta({
  title: blog.value?.title,
  description: "desc",
  ogTitle: blog.value?.title,
  ogDescription: "desc",
  ogImage: blog.value?.eyecatch?.url,
  ogUrl: `${config.public.appOrigin}${route.fullPath}`,
  twitterTitle: blog.value?.title,
  twitterDescription: "desc",
  twitterImage: blog.value?.eyecatch?.url,
  twitterCard: "summary",
});
</script>

<template>
  <div v-if="blog" class="prose prose-indigo mx-auto p-5">
    <h1>{{ blog.title }}</h1>
    <img
      v-if="blog.eyecatch"
      :src="blog.eyecatch.url"
      :alt="blog.title"
      class="w-full h-auto"
    />
    <div v-html="blog.content"></div>
  </div>
</template>
