<template>
  <nav class="border-gray-200 bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
        <img src="../../assets//logoMain.png" alt="" style="max-width: 200px; max-height: 44px" />
        <!--
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Recommend Me</span
        > -->
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md md:p-0 text-white md:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/about"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
              >About</a
            >
          </li>

          <li>
            <router-link to="user/dashboard">
              <a
                href=""
                class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >Dashboard</a
              >
            </router-link>
          </li>

          <li>
            <router-link
              to="/user/login"
              v-if="!isLoggedIn"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              <button class="w-full text-left">Login</button>
            </router-link>
          </li>

          <li>
            <router-link
              to="/user/register"
              v-if="!isLoggedIn"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              <button class="w-full text-left">Sign Up</button>
            </router-link>
          </li>

          <li>
            <router-link to="/user/login" v-if="isLoggedIn">
              <button
                @click.prevent="logout()"
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
              >
                Logout
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isUserLoggedIn: false,
      isMenuOpen: false
    }
  },
  mounted() {
    if (localStorage.getItem('userData')) {
      this.$store.commit('login')
    }
  },
  methods: {
    toggleMenu() {
      console.log('methods clicked')

      this.isMenuOpen = !this.isMenuOpen
      console.log(this.isMenuOpen)
    },
    logout() {
      localStorage.clear()
      this.$store.commit('logout')
      this.$router.push({ path: '/user/login' })
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style></style>
