<template>
  <div class="landing">
    <div class="content">
      <h1 class="text-white">
        Welcome to Recommend Me: An Academic Software Recommendation Engine
      </h1>
      <h2 class="text-white">Recommend Me Quickly: Fast, Accurate, Personalized</h2>

      <button @click="login">Login to get started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    login() {
      this.$router.push('user/login')
    }
  }
}
</script>

<style scoped>
.landing {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(169, 169, 169, 0.7)),
    url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')
      center center no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')
    center center no-repeat; */
  font-family: Arial, sans-serif;
  color: #333;
}

.content {
  text-align: center;
  max-width: 800px;
  margin: 0 20px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  line-height: 1.6;
  margin-bottom: 30px;
}

button {
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0055aa;
}
</style>
