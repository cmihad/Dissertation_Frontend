<template>
  <div class="">
    <h1 class="title_text">user dashboard</h1>

    <div>
      <div class="tabs">
        <button @click="activeTab = 'search'" :class="{ active: activeTab === 'search' }">
          <h4 class="sub_title_text">search</h4>
        </button>
        <button
          @click="activeTab = 'UserInfoUpdate'"
          :class="{ active: activeTab === 'UserInfoUpdate' }"
        >
          <h4 class="sub_title_text">User Info Update</h4>
        </button>
        <button @click="activeTab = 'orders'" :class="{ active: activeTab === 'orders' }">
          <h4 class="sub_title_text">Previous Orders</h4>
        </button>
      </div>
      <div class="tab-content">
        <search v-if="activeTab === 'search'"></search>
        <UserInfoUpdate v-if="activeTab === 'UserInfoUpdate'"></UserInfoUpdate>
        <orders v-if="activeTab === 'orders'"></orders>
      </div>
      <!-- <div class="tab-content">
        <search v-if="activeTab === 'search'"></search>
        <UserInfoUpdate v-if="activeTab === 'UserInfoUpdate'"></UserInfoUpdate>
      </div> -->
    </div>
    <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
      <div class="py-8">
        <br />
        <button class="btn bg-red-600" @click="closeAccount()">Delete your Account?</button>
        <Modal v-model:showModal="showModal" @deleteAccount="handleAccountDeletion" />
      </div>
    </div>
  </div>
</template>

<script>
import search from '../../components/Search.vue'
import UserInfoUpdate from './UserInfoUpdate.vue'
import orders from './Orders.vue'
import Modal from '../../components/UI/Modal/DeleteModal.vue'
import authService from '../../Requests/authService'
export default {
  data() {
    return {
      showModal: false,
      activeTab: 'search'
    }
  },
  components: {
    search,
    UserInfoUpdate,
    orders,
    Modal
  },
  methods: {
    closeAccount() {
      this.showModal = true
    },
    handleAccountDeletion(value) {
      if (value) {
        authService.closeAccount().then((res) => {
          this.$toast.open({
            message: `Account deleted Successfully`,
            type: 'success',
            position: 'top-right'
          })
          localStorage.clear()
          this.$store.commit('logout')
          this.$router.push('/user/register')
        })
      }
    }
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
