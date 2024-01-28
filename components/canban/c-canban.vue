<script setup lang="ts">
import CStage from '~/components/canban/stage/c-stage.vue';
import CTask from '~/components/canban/task/c-task.vue';
import CStageFooter from '~/components/canban/stage/footer/c-stage-footer.vue';
import AAdd from '~/components/action/a-add.vue';
import { useCanbanStore } from '~/stores/canban';
import { storeToRefs } from 'pinia';

const store = useCanbanStore();
const { data } = storeToRefs(store);
const { addStage, translateTask } = store;
let oldLocation = reactive({});

const onDragStart = (event: DragEvent, fromData: any) => {
  event.dataTransfer!.dropEffect = 'move';
  event.dataTransfer!.effectAllowed = 'move';
  oldLocation = fromData;
}

const onDrop = (event: DragEvent, toData: any) => {
  const parent = (event.target as HTMLElement).closest('.c-task') as HTMLElement;
  toData.taskIndex = isNaN(Number(parent?.dataset.index)) ? 0 : Number(parent?.dataset.index);
  const x = oldLocation as any;
  const y = toData;

  translateTask({ x, y });
}
</script>

<template>
  <div class="c-canban">
    <c-stage v-for="(stage, stageIndex) in data"
             :stage-index="stageIndex"
             @drop="onDrop($event, { stageIndex, taskIndex: 0 })"
             @dragenter.prevent
             @dragover.prevent
    >
      <c-task v-for="(task, taskIndex) in stage.stack"
              :id="task.id"
              :text="task.text"
              :stage-index="stageIndex"
              :task-index="taskIndex"
              @dragstart="onDragStart($event, { stageIndex, taskIndex })"
      />
      <c-stage-footer :task-count="stage.stack.length"
                      :stage-index="stageIndex"
      />
    </c-stage>
    <a-add class="!w-[300px] flex-shrink-0" @click="addStage">
      Add stage
    </a-add>
  </div>
</template>

<style lang="postcss" scoped>
.c-canban {
  @apply flex flex-nowrap items-start gap-4 overflow-auto max-h-[80vh];

  grid-auto-flow:column;
}
</style>