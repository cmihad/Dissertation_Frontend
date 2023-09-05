<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/Navigation/TheHeader.vue'
import TheFooter from './components/Navigation/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <div class="max-w-screen-xl mx-auto">
    <div class="container mx-auto">
      <RouterView />
    </div>
  </div>
  <TheFooter />
</template>

<style scoped></style>
