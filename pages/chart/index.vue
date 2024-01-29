<script setup lang="ts">
import { mockTotalData, optionPlan, optionTotalCost } from '~/components/echart/echart.data';
import EChartBar from '~/components/echart/stats/e-chart-bar.vue';
import EChartTotal from '~/components/echart/stats/e-chart-total.vue';
import EChartBanner from '~/components/echart/banner/e-chart-banner.vue';
</script>

<template>
  <div class="chart-page">
    <NuxtLink to="/" class="nav-link">
      Back to main
    </NuxtLink>
    <h1 class="text-4xl">Charts</h1>

    <div class="w-full grid grid-cols-2 gap-2">
      <e-chart-banner title="ОБЩАЯ ВЫРУЧКА">
        <e-chart-total :data="mockTotalData" class="mb-[30px]" />
        <e-chart-bar :data="optionTotalCost" />
      </e-chart-banner>
      <div class=""></div>
    </div>
    <div class="w-full grid grid-cols-1">
      <e-chart-banner>
        <e-chart-bar :data="optionPlan" />
      </e-chart-banner>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.chart-page {
  @apply flex flex-col items-start gap-5;
}
</style>