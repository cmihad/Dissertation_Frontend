<template>
  <pre>
    {{ orders }}
  </pre>
  <div class="" v-if="orders.length === 0">
    <div class="">There is no Previous Orders</div>
  </div>
  <div class="container mx-auto" v-else>
    <div class="">Previous Orders</div>
    <h2 class="center font-bold text-lg">Total amount spent {{ totalSpent }}</h2>
    <table>
      <thead>
        <tr>
          <th>ProductName</th>
          <th>Product Price</th>
          <th>Purchase Date</th>
          <th>Buy Again</th>
          <!-- <th>Review</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in orders" :key="i.id">
          <td>{{ i.productName }}</td>
          <td>{{ i.price }}</td>
          <td>{{ formatDate(i.purchaseDate) }}</td>

          <td>
            <button @click="removeUser(i.url)">Buy Again</button>
          </td>
          <!-- <td>{{ i.purchaseDate }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import authService from '../../Requests/authService'
import helper from '../../helper/helper'
export default {
  data() {
    return {
      orders: [],
      totalSpent: 0
    }
  },

  async created() {
    const res = await authService.getOrdersById(4)
    this.orders = res.data.data.orders.sort((a, b) => {
      return new Date(b.purchaseDate) - new Date(a.purchaseDate)
    })
    this.totalSpent = this.orders.reduce((total, order) => {
      return total + parseFloat(order.price)
    }, 0)
  },
  methods: {
    formatDate(date) {
      return helper.formatDate(date)
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

table,
th,
td {
  border: 1px solid #e0e0e0;
}

th,
td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
}

tr:hover {
  background-color: #fafafa;
}

button {
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s;
}
</style>
