<script setup lang="ts">
import type { StageProps } from '~/components/canban/canban.types';

const props = withDefaults(defineProps<StageProps>(), {
  name: 'Название стадии',
})
</script>

<template>
  <div class="c-stage">
    <div class="c-stage-header">
      {{ props.name }}
    </div>
    <div class="c-stage-stack">
      <slot/>
    </div>
  </div>
</template>

<style lang="postcss">
.c-stage {
  @apply flex flex-col items-start bg-cyan-900/30 border-2 p-2;

  &-header {
    @apply text-2xl bg-cyan-900 px-2 mb-2;
  }

  &-stack {
    @apply flex flex-col items-start;
  }
}
</style>