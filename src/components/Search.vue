<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." />
    <ul>
      <li v-for="item in filteredItems" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      searchQuery: '',
      items: ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
    }
  },
  computed: {
    filteredItems() {
      if (!this.searchQuery) {
        return this.items
      }
    }
  }
}
</script>
