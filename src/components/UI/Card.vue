<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img class="w-full h-48 object-cover" :src="item.productImage" alt="Card Image" />
    <div class="px-6 py-4">
      <h3 class="font-bold text-xl mb-2">{{ item.productName }}</h3>
      <p class="text-gray-700 text-base">{{ item.price }}</p>
      <!-- <p class="text-gray-700 text-base">{{ item.pricePerUnit }}</p> -->
    </div>
    <div class="px-6 py-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="handleClick"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
import authService from '../../Requests/authService'
export default {
  data() {
    return {
      submitObj: {
        userId: '',
        userEmail: '',
        productName: '',
        price: '',
        url: ''
      }
    }
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
    handleClick() {
      this.submitObj.productName = this.itemDetails.productName
      this.submitObj.price = this.itemDetails.price
      this.submitObj.url = this.itemDetails.url
      authService.purchasedAnProduct(this.submitObj)
    }
  }
}
</script>
