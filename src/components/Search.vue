<template>
  <div>
    <div class="search-container">
      <input
        v-model="searchQuery"
        @keyup.enter="search"
        placeholder="Search..."
        class="search-input"
      />
      <button class="btn bg-blue-600" @click="submitForm()">search</button>
      <div class="previous-searches">
        <h4 class="sub_title_text text-left">Previous Searches:</h4>
        <div
          v-for="i in previousSearches.slice(-5)"
          :key="i.id"
          class="previous-search-item"
          @click="loadPreviousSearch(i.searchTerm)"
        >
          <h4 class="cursor-pointer hover:text-blue-500 hover:font-bold capitalize">
            {{ i.searchTerm }}
          </h4>
        </div>
      </div>
    </div>

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
import authService from '../Requests/authService'
import helper from '../helper/helper'
import Card from './UI/Card.vue'
import adminAuthService from '../Requests/adminAuthService'
export default {
  data() {
    return {
      searchQuery: '',
      productsTesco: [],
      productSuperdrug: [],
      previousSearches: [],
      submitObj: {
        userId: '',
        searchTerm: ''
      },
      loading: false
    }
  },
  components: {
    Card
  },
  created() {
    this.submitObj.userId = helper.getUserId()
    const wholeData = authService.getSearchData(this.submitObj.userId)
    wholeData.then((data) => {
      this.previousSearches = data.data.data.searcheds
    })
  },
  methods: {
    submitForm() {
      this.submitObj.searchTerm = this.searchQuery
      this.loading = true
      const result = searchService.getTescoData(this.searchQuery).then((res) => {
        this.productsTesco = res.data
        this.loading = false
      })
      const superdrug = searchService.getSuperDrugData(this.searchQuery).then((res) => {
        this.productSuperdrug = res.data
        this.loading = false
      })

      const res = authService.searchedAnProduct(this.submitObj)
    },

    loadPreviousSearch(search) {
      this.searchQuery = search
      this.submitForm()
    }
  }
}
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
}
</style>
