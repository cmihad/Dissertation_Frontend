<template>
  <div>
    <div class="container mx-auto sm:px-10">
      <div class="grid grid-cols-1 gap-4 place-items-center">
        <div class="xl:h-auto xl:my-10 bg-rgb-white xl:p-16 rounded-lg">
          <div
            class="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-3/4 xl:w-11/12"
          >
            <div>
              <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Login</h2>
            </div>

            <div class="intro-x mt-8">
              <div class="mt-4">
                <label class="custom_form_label">Email</label>
                <input
                  type="email"
                  class="custom_form_input"
                  placeholder="abc@def.com"
                  v-model="model.email"
                />
              </div>

              <div class="mt-4">
                <label class="custom_form_label">Password</label>
                <input
                  type="password"
                  class="custom_form_input"
                  placeholder="Password"
                  v-model="model.password"
                />
              </div>
            </div>

            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button class="btn bg-blue-500 hover:bg-blue-700" @click="submitForm">Sign In</button>
              <div class="py-8">
                <br />
                <button
                  class="bg-gray-200 p-2 px-4 rounded-lg font-bold text-gray-700 hover:bg-gray-300 shadow-md transition duration-300"
                  @click="$router.push({ name: 'userSignUp' })"
                >
                  Don't have an account? Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '../../Requests/authService'
export default {
  data() {
    return {
      model: {
        email: '',
        password: ''
      },
      adminToken: ''
    }
  },
  mounted() {
    this.adminToken = import.meta.env.VITE_ADMIN_JWT
  },
  methods: {
    async submitForm() {
      try {
        const res = await authService.login(this.model)

        localStorage.setItem('userData', JSON.stringify(res.data.userData))
        localStorage.setItem('authToken', res.data.token)

        if (res.data.userData.isAdmin) {
          // this.$router.push({ path: '/admin/dashboard' })
          localStorage.setItem('admintoken', this.adminToken)
          setTimeout(() => {}, 200)
          this.$toast.open({
            message: `successfully logged in as an admin go to dashboard to see the users`,
            type: 'success',
            position: 'top-right'
          })
          this.$store.commit('login')
          this.$router.push({ path: '/admin/dashboard' })
        } else {
          this.$router.push({ path: '/user/dashboard' })
          this.$store.commit('login')
          this.$toast.open({
            message: `successfully logged in `,
            type: 'success',
            position: 'top-right'
          })
        }
      } catch (error) {
        this.$router.push({ path: '/user/login' })

        this.$toast.open({
          message: `Error: ${error.message}`,
          type: 'error',
          position: 'top-right'
        })
      }
    }
  }
}
</script>
