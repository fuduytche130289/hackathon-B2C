<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label class="block mt-3 text-sm text-gray-700 text-center font-semibold">
            Login
          </label>
          <form method="" action="" class="mt-10" @submit.prevent="_login()">

            <div>
              <input type="text" v-model="user.email" placeholder="Email"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.email }} </p>
            </div>

            <div class="mt-7">
              <input type="password" v-model="user.password" placeholder="Password"
                     class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              <p class="error font-semibold text-red-600">{{ err.password }}</p>
            </div>


            <div class="mt-7">
              <button
                  type="submit"
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>


            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">Do you have an account?</label>
                <router-link :to="{name:'signup'}">
                  <a href="#"
                     class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Sign up
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
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      err: {
        email: '',
        password: '',
      },
      countErr: 0,
    }
  },
  methods: {
    Validate() {
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
      } else {
        this.err.password = "";
      }
      if (this.countErr > 0) {
        this.countErr = 0;
        return false;
      }
      this.countErr = 0;
      return true;
    },
    async _login(e) {
      const isValid = this.Validate();
      if (!isValid) {
        return;
      }
      try {
        const response = await authService.doLogin({
          email: this.user.email,
          password: this.user.password,
        })
        const data = response.data;
        localStorage.setItem('token', data.token);
        alert('Login Successfully');
        this.$router.push({name: 'list-product'});
      } catch (e) {
        console.log(e);
        alert('Login Failed');
      }
    },
  },
}
</script>

<style scoped>

</style>