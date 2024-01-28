<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
useHead({
  title: `Detail #${route.params.id}`
});
</script>

<template>
  <div class="task-page">
    <NuxtLink to="/" class="flex bg-cyan-900 hover:bg-amber-700 transition-colors p-1 mb-2">
      Go back
    </NuxtLink>

    <h1 class="text-4xl mb-4">Detail page # {{ route.params.id }}</h1>

    Получаем данные о контенте с бэка
  </div>
</template>

<style scoped lang="postcss">
.task-page {
  @apply flex flex-col items-start;
}
</style>