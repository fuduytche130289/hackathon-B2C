<template>
  <!-- component -->
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label class="block mt-3 text-sm text-gray-700 text-center font-semibold">
            Sign Up
          </label>
          <form @submit.prevent="signup" method="" action="" class="mt-10">

            <div>
              <input type="text" placeholder="Name" v-model="user.name"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.name }} </p>
            </div>

            <div class="mt-7">
              <input type="text" placeholder="Full name" v-model="user.fullName"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.fullName }} </p>
            </div>

            <div class="mt-7">
              <input type="number" placeholder="Phone number" v-model="user.phone"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.phone }} </p>
            </div>

            <div class="mt-7">
              <input type="email" placeholder="Email" v-model="user.email"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.email }} </p>
            </div>

            <div class="mt-7">
              <input type="password" placeholder="Password" v-model="user.password"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.password }}</p>
            </div>

            <div class="mt-7">
              <input type="password" placeholder="Confirm password" v-model="user.confirmPassword"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.confirmPassword }} </p>
            </div>


            <div class="mt-7">
              <button
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Register
              </button>
            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md">
              <label class="block font-medium text-sm text-gray-600 w-full">
                Sign up
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md">
            </div>

            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">You have an account?</label>
                <router-link :to="{name:'login'}">
                  <a href="#"
                     class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                  </a>
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {authService} from "@/service/authService";

export default {
  name: "SignUpPage",
  data() {
    return {
      user: {
        name: '',
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      err: {
        name: '',
        fullName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      countErr: 0,
    }
  },
  methods: {
    Validate() {
      if (!this.user.name) {
        this.err.name = "Name is required.";
        this.countErr++;
      } else {
        this.err.name = "";
      }
      if (!this.user.fullName) {
        this.err.fullName = "Last Name is required.";
        this.countErr++;
      } else {
        this.err.fullName = "";
      }
      if (!this.user.email) {
        this.err.email = "Email is required.";
        this.countErr++;
      } else if (!/\S+@\S+\.\S+/.test(this.user.email)) {
        this.countErr++;
        this.err.email = "Email is invalid.";
      } else {
        this.err.email = "";
      }
      if (!this.user.password) {
        this.err.password = "Password is required.";
        this.countErr++;
      } else if (this.user.password.length < 6) {
        this.err.password = "Password must be more than 6 characters.";
        this.countErr++;
      } else {
        this.err.password = "";
      }
      if (!this.user.confirmPassword) {
        this.err.confirmPassword = "Password is required.";
        this.countErr++;
      } else if (this.user.confirmPassword !== this.user.password) {
        this.err.confirmPassword = "Password dot not match.";
        this.countErr++;
      } else {
        this.err.confirmPassword = "";
      }
      if (!this.user.phone) {
        this.err.phone = "Phone is required.";
        this.countErr++;
      } else {
        this.err.phone = "";
      }
      if (this.countErr > 0) {
        this.countErr = 0;
        return false;
      }
      this.countErr = 0;
      return true;
    },
    async signup(e) {
      if (!this.Validate()) {
        return;
      }
      try {
        await authService.doSignIn({
          name: this.user.name,
          full_name: this.user.fullName,
          phone: this.user.phone,
          email: this.user.email,
          password: this.user.password,
        });
        alert("Sign up successfully.");
        this.$router.push({name: 'login'});
      } catch (e) {
        console.log(e)
      }

    },
  },
}
</script>

<style scoped>

</style>