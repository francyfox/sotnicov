<script setup lang="ts">

</script>

<template>
  <button type="button" class="a-add" name="add" title="add">
    <slot />
    <Icon name="subway:add" />
  </button>
</template>

<style scoped lang="postcss">
.a-add {
  @apply w-full flex justify-center items-center py-1 px-2 bg-amber-700/50 hover:bg-amber-700/80 transition-colors gap-2;
}
</style>