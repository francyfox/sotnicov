<script setup lang="ts">
import { use } from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import VChart from 'vue-echarts'
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from 'echarts';

use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  LineChart,
  CanvasRenderer
])

const props = defineProps<{ data: EChartsOption }>()
const option = ref(props.data);
const chart = ref();


console.log(chart);
</script>

<template>
  <div class="ec-bar">
    <client-only>
      <VChart ref="chart" class="chart" :option="option" :autoresize="true" @getDom="" />
    </client-only>
  </div>

</template>

<style scoped lang="postcss">
.chart {
  @apply w-full h-[300px];
}
</style>