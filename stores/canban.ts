import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import type { IStage } from '~/components/canban/canban.types';
import { canbanMockData, randomID } from '~/components/canban/canban.data';
import { arrElementMoveToIndex } from '~/util/util';

export const useCanbanStore = defineStore('canban', () => {
  const data: Ref<IStage[]> = ref(canbanMockData);

  function addStage() {
    data.value.push({
      id: randomID(),
      name: 'Название стадии',
      stack: []
    });
  }

  function removeStage(index: number) {
    data.value.splice(index, 1);
  }

  function renameStage(index: number, text: string) {
    data.value[index].name = text;
  }

  function addTask(stageIndex: number) {
    data.value[stageIndex].stack.push({
      id: randomID(),
      text: 'Empty'
    });
  }

  function removeTask(stageIndex: number, taskIndex: number) {
    data.value[stageIndex].stack.splice(taskIndex, 1);
  }

  function changeTaskText(stageIndex: number, taskIndex: number, text: string) {
    data.value[stageIndex].stack[taskIndex].text = text;
  }

  function translateTask(stageIndex: number, taskIndex: number, toIndex: number) {
    data.value[stageIndex].stack = arrElementMoveToIndex(data.value[stageIndex].stack, taskIndex, toIndex);
  }

  return {
    data,
    addStage,
    removeStage,
    renameStage,
    addTask,
    removeTask,
    changeTaskText,
    translateTask
  }
});