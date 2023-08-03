<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/Navigation/TheHeader.vue'
import TheFooter from './components/Navigation/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <div class="container mx-auto py-4">
    <RouterView />
  </div>
  <TheFooter />
</template>

<style scoped></style>
