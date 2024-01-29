import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import type { IStage } from '~/components/canban/canban.types';
import { canbanMockData, randomID } from '~/components/canban/canban.data';

type TaskLocation = {
  stageIndex: number
  taskIndex: number
}

type Destination = {
  x: TaskLocation
  y: TaskLocation
}
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

  function translateTask(dest: Destination) {
    const { x, y } = dest;

    const task = data.value[x.stageIndex].stack.splice(x.taskIndex, 1)[0];
    data.value[y.stageIndex].stack.splice(y.taskIndex, 0, task);
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