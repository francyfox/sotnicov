<script setup lang="ts">
import type { TaskProps } from '~/components/canban/canban.types';
import { copyToClipboard } from '~/util/util';
import ADelete from '~/components/action/a-delete.vue';
import { useCanbanStore } from '~/stores/canban';

const url = useRequestURL();

const props = withDefaults(defineProps<TaskProps>(), {
  text: 'Пусто'
});

const store = useCanbanStore();
const { removeTask } = store;
</script>

<template>
  <div class="c-task">
    <div class="w-full flex flex-col">
      <div class="w-full flex items-start">
        <button type="button"
                class="c-task-url"
                name="copy"
                title="copy task url"
                @click="copyToClipboard(`${url.href}task/${props.id}`)"
        >
          <Icon name="material-symbols:link" />
        </button>

        <a href="#" @click.prevent class="c-task-id" title="go to task">
          # Task Id: {{ props.id }}
        </a>

        <a-delete @click="removeTask(props.stageIndex, props.taskIndex)" />
      </div>

      <div class="c-task-text">
        {{ props.text }}
      </div>
    </div>
    <button type="button" title="drag and drop" class="c-task-dnd">
      <Icon size="32" name="mdi:drag-horizontal"/>
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.c-task {
  @apply w-full flex flex-col border-double border-4 border-sky-500 mb-2;

  &-id {
    @apply flex-grow bg-amber-200/20 hover:bg-amber-200/40 transition-colors px-1;
  }

  &-url {
    @apply bg-amber-700/20 hover:bg-amber-700/40 transition-colors px-1;
  }

  &-text {
    @apply p-1;
  }

  &-dnd {
    @apply h-[24px] w-full flex justify-center items-center bg-gray-600/50 hover:bg-orange-400/80 transition-colors;

    &:active:focus {
      @apply bg-orange-200;
    }
  }
}
</style>