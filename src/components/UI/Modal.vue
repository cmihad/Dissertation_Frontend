<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span @click="closeModal" class="close-button">&times;</span>
      <h2 class="sub_title_text">Did you Purchase the Product?</h2>
      <div class="button-container">
        <button @click="confirmPurchase" class="modal-button sub_title_text">Yes</button>
        <button @click="closeModal" class="modal-button sub_title_text">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      didPurchase: false
    }
  },
  props: ['showModal'],
  methods: {
    closeModal() {
      this.$emit('update:showModal', false)
    },
    confirmPurchase() {
      this.$emit('purchaseConfirmed', true)
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close-button {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  cursor: pointer;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.modal-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.modal-button:hover {
  background-color: #45a049;
}
</style>
