<script setup lang="ts">
import CStage from '~/components/canban/stage/c-stage.vue';
import CTask from '~/components/canban/task/c-task.vue';
import { canbanMockData } from '~/components/canban/canban';

const data = canbanMockData;
</script>

<template>
  <div class="c-canban">
    <c-stage v-for="stage in data">
      <c-task v-for="task in stage.stack"
              :id="task.id"
              :text="task.text"
      />
    </c-stage>
  </div>

</template>

<style lang="postcss" scoped>
.c-canban {
  @apply flex flex-nowrap;
}
</style>