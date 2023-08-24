<template>
  <div>
    <div class="container mx-auto sm:px-10">
      <div class="grid grid-cols-1 gap-2 place-items-center">
        <!-- BEGIN: Register Info -->

        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="xl:h-auto xl:my-10 bg-rgb-white xl:p-16 rounded-lg">
          <div
            class="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-3/4 xl:w-11/12"
          >
            <div>
              <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Sign up
              </h2>
            </div>

            <div class="intro-x mt-8">
              <div class="mb-6">
                <label for="default-input" class="custom_form_label">Name</label>
                <input
                  type="text"
                  id="default-input"
                  class="custom_form_input"
                  placeholder="Terry"
                  v-model="name"
                />
              </div>

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
                <label class="custom_form_label">Enter Your Phone Number (with country code)</label>
                <input
                  type="tel"
                  class="custom_form_input"
                  placeholder="8801712345678"
                  v-model="model.phone"
                />
              </div>

              <div class="mt-4">
                <label class="custom_form_label">Set a password</label>
                <input
                  type="password"
                  class="custom_form_input"
                  placeholder="Password"
                  v-model="model.password"
                />
              </div>
              <div class="mt-4">
                <label class="custom_form_label">Confirm your password</label>
                <input
                  type="password"
                  class="custom_form_input"
                  placeholder="Confirm Password"
                  v-model="model.confirmPassword"
                />
              </div>
            </div>

            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button class="btn bg-blue-500 hover:bg-blue-700" @click="submitForm">
                Register
              </button>
              <div class="py-8">
                <button
                  class="bg-gray-200 p-2 px-4 rounded-lg font-bold text-gray-700 hover:bg-gray-300 shadow-md transition duration-300"
                  @click="$router.push({ name: 'csLogin' })"
                >
                  Already have an account? Sign in
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
      model: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: ''
      }
    }
  },
  methods: {
    async submitForm() {
      if (this.model.password === this.model.confirmPassword) {
        this.agree = true
      } else {
        this.$toast.open({
          message: `Password Does not match`,
          type: 'error',
          position: 'top-right'
        })
      }

      if (this.agree) {
        try {
          const res = await authService.singUp(this.model)
          this.$router.push({ path: '/user/login' })
          this.$toast.open({
            message: `successfully Registered You can login to your account `,
            type: 'success',
            position: 'top-right'
          })
        } catch (error) {
          console.error('Error logging in:', error)
          alert('Failed to register ')
        }
      }
    }
  }
}
</script>
