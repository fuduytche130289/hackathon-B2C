<template>
  <div class="container mx-auto">

    <div
        class="w-full h-full bg-black dark:bg-gray-100 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden"
        id="chec-div">
      <div
          class="w-full h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout">
        <div class="flex items-center lg:flex-row flex-col justify-center" id="cart">
          <div
              class="lg:w-2/3 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-100 overflow-y-hidden overflow-x-hidden h-auto"
              id="scroll">

            <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-black pt-3">Shoe</p>
            <!--Card item-->
            <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t-2 border-white"
                 v-for="(itemCart, itemCartIndex) in cart"
                 :key="itemCartIndex">
              <div class="md:w-4/12 2xl:w-1/4 w-full">
                <img :src="itemCart.image.full_image_path" alt="Black Leather Bag"
                     class="h-full object-center object-cover md:block hidden"/>
                <img :src="itemCart.image.full_image_path" alt="Black Leather Bag"
                     class="md:hidden w-full h-full object-center object-cover"/>
              </div>
              <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div class="flex items-center justify-between w-full pt-1">
                  <p class="text-base font-black leading-none text-gray-800 dark:text-black">{{ itemCart.name }}</p>
                  <div
                      class="relative w-20 h-10 py-1 px-1 border border-gray-200  focus:outline-none dark:text-black">
                    <div class="flex flex-row w-full items-center top-20">
                      <i class="fa-solid fa-minus cursor-pointer" @click="updateQuantity(itemCartIndex,-1)"></i>
                      <span class="mx-4 font-bold text-lg "> {{ itemCart.quantity }}</span>
                      <i class="fa-solid fa-plus cursor-pointer" @click="updateQuantity(itemCartIndex,1)"></i>
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between pt-5">
                  <p class="text-xs leading-3 underline text-red-500 cursor-pointer"
                     @click="removeItemCart(itemCart.id)">Remove</p>
                  <p class="text-base font-black leading-none text-gray-800 dark:text-black">
                    {{ itemCart.price * itemCart.quantity }}</p>
                </div>
              </div>
            </div>
            <!--End card item-->
          </div>
        </div>
        <div class="flex items-center lg:flex-row flex-col justify-center">
          <router-link :to="{name:'order'}">
            <button
                class="text-base leading-none w-96 my-5 py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">
              Checkout
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    }
  },
  mounted() {
    if (localStorage.getItem("carts")) {
      this.cart = JSON.parse(localStorage.getItem("carts"))
    }
  },
  methods: {

    removeItemCart(id) {
      this.cart.splice(this.cart.find(item => item.id === id), 1);
      localStorage.setItem("carts", JSON.stringify(this.cart))
      alert('xóa sản phẩm khỏi giỏ hàng');
    },

    updateQuantity(itemCartIndex, quantityUnit) {
      if (this.cart[itemCartIndex].quantity + quantityUnit <= 0) {
        this.cart.splice(itemCartIndex, 1);
      } else {
        this.cart[itemCartIndex].quantity += quantityUnit;
        localStorage.setItem('carts', JSON.stringify(this.cart));
      }
    }
  },
}
</script>

<style>
/* width */
#scroll::-webkit-scrollbar {
  width: 1px;
}

/* Track */
#scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
#scroll::-webkit-scrollbar-thumb {
  background: rgb(133, 132, 132);
}
</style>

