<script setup lang="ts">
import type { TaskProps } from '~/components/canban/canban.types';

const props = withDefaults(defineProps<TaskProps>(), {
  text: 'Пусто'
});
</script>

<template>
  <div class="c-task">
    <a href="#" @click.prevent class="c-task-id">
      # {{ props.id }}
    </a>

    <div class="c-task-text">
      {{ props.text }}
    </div>
  </div>
</template>

<style scoped>

</style>