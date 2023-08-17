<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>
