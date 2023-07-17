<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/Navigation/TheHeader.vue'
import TheFooter from './components/Navigation/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style scoped></style>
