<script setup lang="ts">
import type { StageProps } from '~/components/canban/canban.types';
import ADelete from '~/components/action/a-delete.vue';
import { useCanbanStore } from '~/stores/canban';
import { storeToRefs } from 'pinia';

const props = withDefaults(defineProps<StageProps>(), {
  name: 'Название стадии',
});

const store = useCanbanStore();
const { data } = storeToRefs(store);
const { removeStage } = store;
</script>

<template>
  <div class="c-stage">
    <div class="w-full flex mb-2">
      <div class="c-stage-header">
        <input type="text" v-model="data[props.stageIndex].name">
      </div>
      <a-delete @click="removeStage(props.stageIndex)" />
    </div>

    <div class="c-stage-stack">
      <slot/>
    </div>
  </div>
</template>

<style lang="postcss">
.c-stage {
  @apply w-[300px] flex-shrink-0 flex flex-col items-start bg-cyan-900/30 border-dashed border-2 border-sky-200 p-2;

  &-header {
    @apply w-full text-xl bg-cyan-900 px-2;

    input {
      @apply w-full flex bg-transparent border-r-0;

      box-sizing: border-box;
    }
  }

  &-stack {
    @apply w-full flex flex-col items-start;
  }
}
</style>