<template>
  <div class="container mx-auto">
    <div class="">Admin Dashboard</div>
    <h2 class="center font-bold text-lg">Total number of user {{ totalUser }}</h2>
    <table>
      <thead>
        <tr>
          <th>ProductName</th>
          <th>Product Price</th>
          <th>Purchase Date</th>
          <th>Buy Again</th>
          <th>Review</th>
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
          <td>{{ i.purchaseDate }}</td>
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
      orders: []
    }
  },

  async created() {
    const res = await authService.getOrdersById(4)
    this.orders = res.data.data.orders
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
  background-color: #f44336; /* Red */
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #d32f2f; /* Darker red on hover */
}
</style>
