<script setup lang="ts">

import EChart from '~/components/echart/e-chart.vue';
</script>

<template>
  <div class="chart-page">
    <h1 class="text-4xl mb-5">Charts</h1>

    <div class="w-full grid grid-cols-2 gap-2">
      <e-chart />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.chart-page {
  @apply flex flex-col items-start;
}
</style>