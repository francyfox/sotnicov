<script setup lang="ts">
import CCanban from '~/components/canban/c-canban.vue';
</script>

<template>
  <div class="flex flex-col items-start">
    <NuxtLink to="/chart" class="nav-link">
      Charts
    </NuxtLink>
    <div class="flex text-4xl mb-5">
      <h1> Canban</h1>
      <a href="#">
        <Icon name="uil:github" color="white" />
      </a>
    </div>

    <c-canban/>
  </div>
</template>

<style scoped>

</style>