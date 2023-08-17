<template>
  <div class="">
    <h2>user dashboard</h2>
    <search />

    <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
      <div class="py-8">
        <br />
        <button class="btn bg-red-600" @click="deleteUser()">Delete your Account?</button>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../../components/Search.vue'
export default {
  components: {
    search
  },
  methods: {
    deleteUser(user) {}
  }
}
</script>

<style></style>
