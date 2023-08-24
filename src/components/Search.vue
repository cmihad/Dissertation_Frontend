<template>
  <div>
    <input v-model="searchQuery" placeholder="Search..." />
    <br />
    <br />
    <br />
    <button class="btn bg-blue-600" @click="submitForm()">search</button>

    <div class="tesco">{{ productsTesco }}</div>
    <div class="tesco">{{ productSuperdrug }}</div>
    <pre>
      {{ $data.productSuperdrug }}
    </pre>
    <h2>tesco yeah</h2>
    <pre>
      {{ $data.productsTesco }}
    </pre>
  </div>
</template>

<script>
import searchService from '../Requests/searchService'

searchService
export default {
  data() {
    return {
      searchQuery: '',
      productsTesco: [],
      productSuperdrug: []
    }
  },
  methods: {
    submitForm() {
      console.log(this.searchQuery)

      const result = searchService.getTescoData(this.searchQuery).then((res) => {
        console.log(res.data)
        this.productsTesco = res.data
      })
      const superdrug = searchService.getSuperDrugData(this.searchQuery).then((res) => {
        console.log(res.data)
        this.productSuperdrug = res.data
      })
    }
  }
}
</script>
