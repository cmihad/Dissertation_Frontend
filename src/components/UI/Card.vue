<template>
  <div class="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg bg-white">
    <div class="flex-grow">
      <img class="w-full h-48 object-cover" :src="item.productImage" alt="Card Image" />
      <div class="px-6 py-4">
        <h3 class="font-bold text-xl mb-2">{{ item.productName }}</h3>
        <p class="text-gray-700 text-base">{{ item.price }}</p>
        <!-- <p class="text-gray-700 text-base">{{ item.pricePerUnit }}</p> -->
      </div>
    </div>
    <div class="px-6 py-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="handleClick(item)"
      >
        Buy
      </button>
      <Modal v-model:showModal="showModal" @purchaseConfirmed="handlePurchaseConfirmation" />
    </div>
  </div>
</template>

<script>
import authService from '../../Requests/authService'
import Modal from './Modal/Modal.vue'
export default {
  data() {
    return {
      showModal: false,
      submitObj: {
        userId: '',
        userEmail: '',
        productName: '',
        price: '',
        url: ''
      }
    }
  },
  components: {
    Modal
  },
  computed: {
    itemDetails() {
      return {
        productImage: this.item.productImage,
        productName: this.item.productName,
        price: this.item.price,
        pricePerUnit: this.item.pricePerUnit
      }
    }
  },
  created() {
    const luser = localStorage.getItem('userData')
    const user = JSON.parse(luser)
    this.submitObj.userId = user.id
    this.submitObj.userEmail = user.email
  },
  props: {
    item: {
      productImage: {
        type: String,
        required: false,
        default: 'https://via.placeholder.com/400x300' // Default placeholder image
      },
      productName: {
        type: String,
        required: false,
        default: 'Default Title'
      },
      price: {
        type: String,
        required: false,
        default: 'Default Description'
      },
      pricePerUnit: {
        type: String,
        required: false,
        default: 'Default Description'
      }
    }
  },
  methods: {
    handleClick(item) {
      console.log(item.company)
      if (item.company === 'superdrug') {
        const url = `https://superdrug.com${item.url}`
        // window.open('https://www.external-site.com', '_blank')
        window.open(url, '_blank')
      }
      this.showModal = true
    },
    handlePurchaseConfirmation(value) {
      if (value) {
        this.submitObj.productName = this.itemDetails.productName
        this.submitObj.price = this.itemDetails.price
        this.submitObj.url = this.itemDetails.url
        authService.purchasedAnProduct(this.submitObj)
      }
    }
  }
}
</script>
