<script setup lang="ts">
import EChartBanner from '~/components/echart/banner/e-chart-banner.vue';
import EChartBar from '~/components/echart/stats/e-chart-bar.vue';
import EChartTotal from '~/components/echart/stats/e-chart-total.vue';
import { mockTotalData } from '~/components/echart/echart.data';
</script>

<template>
  <e-chart-banner title="ОБЩАЯ ВЫРУЧКА">
    <e-chart-total :data="mockTotalData" class="mb-[30px]" />
    <e-chart-bar />
  </e-chart-banner>
</template>

<style scoped lang="postcss">

</style>