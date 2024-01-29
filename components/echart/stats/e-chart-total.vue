<script setup lang="ts">
import { rouble } from '~/util/util';
import type { EchartTotalProps } from '~/components/echart/echart.types';

const props = defineProps<{ data: EchartTotalProps[] }>()

</script>

<template>
  <div class="ec-total">
    <div v-for="item in props.data" class="flex flex-grow flex-col gap-4">
      <div class="ec-total-header">
        <span v-if="item.markerColor" class="ec-total-marker" :style="`background-color: ${item.markerColor}`"></span>
        {{ item.title }}
      </div>
      <div class="ec-total-sum">
        {{ rouble.format(item.sum) }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.ec-total {
  @apply flex justify-between gap-3;

  > div:not(:last-child) {
    border-right: solid 1px #272B33;
  }

  &-marker {
    @apply flex shrink-0 w-[6px] h-[6px] stroke-[1px] stroke-[rgba(33,34,38,0.90)];

    border-radius: 100%;
  }

  &-header {
    @apply w-full flex items-center text-[#93969C] text-sm not-italic font-medium leading-5 tracking-[-0.084px] uppercase gap-[7px];
  }

  &-sum {
    @apply text-white text-2xl not-italic font-normal leading-8;
  }
}
</style>