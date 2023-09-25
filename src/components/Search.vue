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
      <h2>SuperDrug</h2>
      <div class="grid-container">
        <div v-for="item in productSuperdrug" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
      <h2>Tesco</h2>
      <div class="grid-container">
        <div v-for="item in productsTesco" :key="item.id">
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
      loading: false,
      userData: {},
      superDrugQuery: ''
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
    const response = authService.getUserData()
    response.then((res) => {
      console.log(res.data.data)
      this.userData = res.data.userData
    })
  },

  methods: {
    submitForm() {
      this.submitObj.searchTerm = this.searchQuery
      if (this.searchQuery.includes('sham')) {
        if (this.userData.profile.hairInfo.toLowerCase() === 'oily') {
          this.superDrugQuery = `oily%20hair%20${this.searchQuery}`
        } else if (this.userData.profile.hairInfo.toLowerCase() === 'dandruff') {
          this.superDrugQuery = `anti%20dandruff%20${this.searchQuery}`
        } else {
          this.superDrugQuery = this.searchQuery
        }
      }
      if (this.searchQuery.includes('cream') || this.searchQuery.includes('lotio')) {
        this.superDrugQuery = `${this.userData.profile.skinInfo}%20skin%20${this.searchQuery}`
      }

      this.loading = true

      const result = searchService.getTescoData(this.searchQuery).then((res) => {
        this.productsTesco = res.data
        this.loading = false
      })

      let finalQuery = ''
      if (this.superDrugQuery) {
        finalQuery = this.superDrugQuery
      } else {
        finalQuery = this.searchQuery
      }

      const superdrug = searchService.getSuperDrugData(finalQuery).then((res) => {
        this.productSuperdrug = res.data
        this.loading = false
      })

      const res = authService.searchedAnProduct(this.submitObj)
    },

    loadPreviousSearch(search) {
      this.searchQuery = search
      this.submitForm()
    }
  },
  computed: {
    filteredProducts() {
      return this.productSuperdrug.filter((product) => {
        if (
          this.userData.profile.hairInfo.toLowerCase() === 'dandruff' &&
          product.type === 'Dandruff'
        ) {
          return true
        }
        if (this.userData.annualIncome < 30000 && product.price < 70) {
          return true
        }
        return false
      })
    }
  }
}
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}
</style>
