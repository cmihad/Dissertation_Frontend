<template>
  <div class="">
    <h2>user dashboard</h2>
    <div>
      <div class="tabs">
        <button @click="activeTab = 'search'" :class="{ active: activeTab === 'search' }">
          search
        </button>
        <button
          @click="activeTab = 'UserInfoUpdate'"
          :class="{ active: activeTab === 'UserInfoUpdate' }"
        >
          User Info Update
        </button>
      </div>
      <div class="tab-content">
        <search v-if="activeTab === 'search'"></search>
        <UserInfoUpdate v-if="activeTab === 'UserInfoUpdate'"></UserInfoUpdate>
      </div>
    </div>
    <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
      <div class="py-8">
        <br />
        <button class="btn bg-red-600" @click="closeAccount()">Delete your Account?</button>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../../components/Search.vue'
import authService from '../../Requests/authService'
import UserInfoUpdate from './UserInfoUpdate.vue'

export default {
  data() {
    return {
      activeTab: 'search'
    }
  },
  components: {
    search,
    UserInfoUpdate
  }
}
</script>

<style>
.tabs button {
  padding: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.tabs button.active {
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.tab-content {
  padding: 20px;
}
</style>
