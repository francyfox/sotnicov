<script setup lang="ts">
import type { StageFooterProps } from '~/components/canban/canban.types';
import AAdd from '~/components/action/a-add.vue';
import { useCanbanStore } from '~/stores/canban';

const props = defineProps<StageFooterProps>();

const store = useCanbanStore();
const { addTask } = store;
</script>

<template>
  <div class="c-stage-footer">
    <div v-if="props.taskCount === 0" class="c-stage-footer-empty">
      No task
      <Icon name="line-md:coffee-half-empty-twotone-loop" />
    </div>
    <a-add @click="addTask(props.stageIndex)">
      Add task
    </a-add>
  </div>

</template>

<style scoped lang="postcss">
.c-stage-footer {
  @apply w-full flex flex-col;

  &-empty {
    @apply w-full flex justify-center items-center py-1 px-2 gap-1 mb-2;
  }
}
</style>