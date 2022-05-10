<template>
  <div>

    <!-- New product -->
    <div class="container mx-auto">
      <h4 class="text-2xl font-bold mt-5">Sản phẩm mới nhất</h4>
      <div class="grid  grid-cols-1 md:grid-rows-2 md:grid-cols-4 mt-5 gap-10">

        <div class="bg-white shadow col-span-1"
             v-for="(cartsItem,cartsIndex) in homeData" :key="cartsIndex">

          <div>
            <router-link @click.native="scrollToTop" :to="{name:'detail-product',query:{id:cartsItem.id}} ">
              <img :src="cartsItem.image.full_image_path" class="z-10 w-full h-72 object-cover" alt="shoe">
            </router-link>
            <div class="space-y-4 mt-5 px-4">
              <div class="flex justify-between">
                <h4 class="uppercase font-extrabold text-xl text-left">{{ cartsItem.name }}</h4>
                <button><i class="fa-regular fa-heart text-xl"></i></button>
              </div>
              <p class="font-bold text-2xl text-red-500 text-left"><span>{{ cartsItem.price }}</span></p>
            </div>
            <div class="flex w-full mt-5 items-center justify-between pl-2">
              <div class="flex space-x-2 font-bold">
                <span class="bi bi-plus cursor-pointer"><i class="fa-solid fa-plus"></i></span>
                <input type="text" readonly class="border rounded w-12 text-center font-medium" value="1">
                <span class="bi bi-dash cursor-pointer"><i class="fa-solid fa-minus"></i></span>
              </div>
              <div class="gap-1 flex">
                  <button class="p-3 text-md bg-gray-900 text-white" @click="addToCart(cartsItem.id)">
                    Add To Cart
                  </button>
                <button class="p-3 text-md bg-gray-900 text-white"><i class="fa-solid fa-share-nodes"></i></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {homeService} from "../service/homeService";

export default {
  name: "HomePage",
  data() {
    return {
      homeData: {},
      carts: []
    }
  },
  methods: {
    async getData() {
      try {
        const resp = await homeService.getHome();
        this.homeData = resp.data.lastProducts;
        console.log(this.homeData);

      } catch (e) {
        console.log(e);
      }
    },
    addToCart(ProductId) {

      if (this.carts.find(product => product.id == ProductId)) {
        alert('sản phẩm đã có trong giỏ hàng')

      } else {

        this.carts.push(this.homeData.find(product => product.id == ProductId))
        this.carts.map((item) => item.quantity = 1)
        localStorage.setItem('carts', JSON.stringify(this.carts))
        alert('thêm sản phẩm vào giỏ hàng thành công')

      }

    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  components: {},
  mounted() {
    this.getData();
    if(localStorage.getItem('carts')){
      this.carts = JSON.parse(localStorage.getItem('carts'))
    }
  }
}
</script>

<style scoped>

</style>