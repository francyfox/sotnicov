<script setup lang="ts">

</script>

<template>
  <section class="py-5">
    <div class="container mx-auto">
      <div>
        <slot />
      </div>
    </div>
  </section>

</template>

<style lang="postcss">
.nav-link {
  @apply flex bg-cyan-900 hover:bg-amber-700 transition-colors p-1 mb-2;
}
</style>