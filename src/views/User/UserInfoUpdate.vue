<template>
  <div class="container mx-auto sm:px-10">
    <div class="grid grid-cols-1 gap-4 place-items-center">
      <div class="xl:h-auto xl:my-10 bg-rgb-white xl:p-16 rounded-lg">
        <div
          class="my-auto mx-auto bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-3/4 xl:w-11/12"
        >
          <div>
            <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
              Update Profile
            </h2>
          </div>

          <div class="intro-x mt-8">
            <div class="mt-4">
              <label class="custom_form_label">Name</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="John Doe"
                v-model="userData.name"
              />
            </div>

            <div class="mt-4">
              <label class="custom_form_label">Email</label>
              <input
                type="email"
                class="custom_form_input"
                placeholder="abc@def.com"
                v-model="userData.email"
              />
            </div>
            <div class="mt-4">
              <label class="custom_form_label">Age</label>
              <input
                type="email"
                class="custom_form_input"
                placeholder="abc@def.com"
                v-model="userData.age"
              />
            </div>
            <div class="mt-4">
              <label class="custom_form_label">Phone Number</label>
              <input
                type="email"
                class="custom_form_input"
                placeholder="abc@def.com"
                v-model="userData.age"
              />
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Skin Info</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="Normal skin type"
                v-model="profile.skinInfo"
              />
            </div>

            <div class="mt-4">
              <label class="custom_form_label">Allergies</label>
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Skin Info</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="Normal skin type"
                v-model="profile.skinInfo"
              />
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Hair Info</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="Short"
                v-model="profile.hairInfo"
              />
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Postal Code</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="12345"
                v-model="profile.postalCode"
              />
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Annual Income</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="5000000"
                v-model="profile.annualIncome"
              />
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Gender</label>
              <select class="custom_form_input" v-model="profile.gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Ethnicity</label>
              <input
                type="text"
                class="custom_form_input"
                placeholder="Hispanic"
                v-model="profile.ethnicity"
              />
            </div>

            <div class="mt-4" v-if="profile">
              <label class="custom_form_label">Is College Graduate?</label>
              <input
                type="checkbox"
                class="custom_form_input"
                v-model="profile.isCollegeGraduate"
              />
            </div>
          </div>

          <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button class="btn bg-blue-500 hover:bg-blue-700" @click="submitForm">
              Save Changes
            </button>
          </div>
          <!-- <pre>
            {{ $data.userData }}
          </pre> -->
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
      userData: {
        id: null,
        name: '',
        email: '',
        address: '',
        phoneNumber: ''
        // ... other fields
      },
      profile: {
        id: null,
        userId: null,
        allergies: [],
        skinInfo: '',
        hairInfo: '',
        postalCode: '',
        annualIncome: '',
        gender: '',
        ethnicity: '',
        isCollegeGraduate: ''
        // ... other fields
      }
    }
  },
  created() {
    this.userData = this.initialData.userData
    this.profile = this.initialData.userData.profile
  },
  methods: {
    submitForm() {
      authService.updateUserInfo(this.profile).then((res) => {
        if (res.status == 200) {
          this.$toast.open({
            message: `successfully updated user info`,
            type: 'success',
            position: 'top-right'
          })
        }
      })
    }
  },
  created() {
    const response = authService.getUserData()
    response.then((res) => {
      this.userData = res.data.userData
      this.profile = res.data.userData.profile
    })
  }
}
</script>

<!-- Add the appropriate styling classes in your stylesheet -->
