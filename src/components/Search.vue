<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." />
    <br />
    <br />
    <br />

    <button class="btn bg-blue-600" @click="submitForm()">search</button>
    <div v-if="loading">
      <img src="../assets/Spinner-1s-200px.gif" alt="" />
    </div>
    <div v-else>
      <h2>Tesco</h2>
      <div class="grid-container">
        <div v-for="item in productsTesco" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
      <h2>SuperDrug</h2>
      <div class="grid-container">
        <div v-for="item in productSuperdrug" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchService from '../Requests/searchService'
import Card from './UI/Card.vue'
searchService
export default {
  data() {
    return {
      searchQuery: '',
      productsTesco: [],
      productSuperdrug: []
    }
  },
  components: {
    Card
  },
  methods: {
    submitForm() {
      this.loading = true
      const result = searchService.getTescoData(this.searchQuery).then((res) => {
        console.log(res.data)
        this.productsTesco = res.data
        this.loading = false
      })
      const superdrug = searchService.getSuperDrugData(this.searchQuery).then((res) => {
        console.log(res.data)
        this.productSuperdrug = res.data
        this.loading = false
      })
    }
  }
}
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  ); /* Adjust the minmax value based on your desired column width */
  grid-template-rows: repeat(3, 1fr);
  gap: 16px; /* Gap between grid items */
}
</style>
