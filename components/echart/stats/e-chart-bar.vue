<script setup lang="ts">
import { use } from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import VChart from 'vue-echarts'
import {
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { optionTotalCost } from '~/components/echart/echart.data';

use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer
])

const option = ref(optionTotalCost);
</script>

<template>
  <div class="ec-bar">
    <client-only>
      <VChart class="chart" :option="option" :autoresize="true" />
    </client-only>
  </div>

</template>

<style scoped lang="postcss">
.chart {
  @apply w-full h-[300px];
}
</style>