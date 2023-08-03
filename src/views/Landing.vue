<template>
  <div class="landing">
    <div class="content">
      <h1>Welcome to Recommend Me Software</h1>
      <h2>Discover the Right Tools for the Job</h2>
      <p>
        Take the guesswork out of choosing software. Our proprietary recommendation engine helps you
        find the perfect software for your unique needs.
      </p>
      <button @click="navigateToRecommendations">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    navigateToRecommendations() {
      this.$router.push('/recommendations')
    }
  }
}
</script>

<style scoped>
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafafa;
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
