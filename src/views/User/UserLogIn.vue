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
                <label class="custom_form_label">password</label>
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
                <button
                  class="btn bg-blue-500 hover:bg-blue-700"
                  @click="$router.push({ name: 'userSignUp' })"
                >
                  Don't have an account? Sign Up
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
      agree: false,
      confirmPassword: '',
      model: {
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    // scrap.scrapeProducts(
    //   'https://www.superdrug.com/hair/shampoo/anti-dandruff-shampoo/c/pt_hair_anti_dandruff_shampoo'
    // )
    console.log('testing')
  },
  methods: {
    async submitForm() {
      try {
        const res = await authService.login(this.model)
        localStorage.setItem('authToken', res.data.token)

        if (res.data.user.isAdmin) {
          this.$router.push({ path: '/admin/dashboard' })
          localStorage.setItem(
            'admintoken',
            'oNxM!sUSnF9as3UIqep!!NJhwROzfPd-9-vIRUkUmKDHNaf-!vUbbI!mz1Fa!kY/'
          )
        } else {
          this.$router.push({ path: '/user/dashboard' })
        }
      } catch (error) {
        console.error('Error logging in:', error)
        alert('Failed to log in. Please check your credentials and try again.')
      }
    }
  }
}
</script>
