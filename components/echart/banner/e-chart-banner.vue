<script setup lang="ts">
import type { EchartBannerProps } from '~/components/echart/echart.types';

const props = defineProps<EchartBannerProps>();
</script>

<template>
  <div class="ec-banner">
    <div v-if="props.title" class="ec-banner-title">
      {{ props.title }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.ec-banner {
  @apply flex flex-col shrink-0 rounded-lg bg-[#1B1B1E] p-[25px];

  &-title {
    @apply text-[#FFF] text-lg not-italic font-medium leading-5 tracking-[-0.108px] uppercase mb-[35px];
  }
}
</style>