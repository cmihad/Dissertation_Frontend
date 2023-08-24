<template>
  <div class="container mx-auto">
    <div class="">Admin Dashboard</div>
    <h2 class="center font-bold text-lg">Total number of user {{ totalUser }}</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button @click="removeUser(user.email)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import adminAuth from '../../Requests/adminAuthService'
export default {
  data() {
    return {
      users: [],
      totalUser: ''
    }
  },

  mounted() {
    setTimeout(() => {
      const user = adminAuth.getAllUsers()
      user.then((data) => {
        this.users = data.data
      })

      const numberOfUsers = adminAuth.getNumberOfUsers()
      numberOfUsers.then((data) => (this.totalUser = data.data))
    }, 500)
  },

  methods: {
    removeUser(email) {
      const del = adminAuth.deleteUserByEmail(email)
      del.then(() => {
        adminAuth.getAllUsers().then((data) => (this.users = data.data))
      })
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
