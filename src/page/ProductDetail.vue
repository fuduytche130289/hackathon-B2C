<template>
  <div>

    <div class="lg:mx-24 mx-5 my-10">
      <div class="grid lg:grid-cols-7 grid-cols-1 gap-4 space-x-5">
        <div class="grid grid-cols-2 col-span-3 gap-4 space-x-5">
          <div class="col-span-5">
            <img class="w-full h-96 object-cover" :src="productImg" alt="">
          </div>
          <div class="flex " v-for="(imgProductDetailDataItem,productDetailDataIndex) in productDetailData.images"
               :key="productDetailDataIndex">
            <img class="w-20" :src="imgProductDetailDataItem.full_image_path" alt="Nike Jordan 3-image-6"
                 @click="handleProductImg(imgProductDetailDataItem.full_image_path)"/>
          </div>
        </div>

        <div class="col-span-4 space-y-7">
          <h1 class="text-3xl font-bold">{{productDetailData.name}}</h1>
          <p class="font-bold text-2xl text-red-500 text-left">
            <span>{{productDetailData.price}}</span>
          </p>

          <div class="flex space-x-2 items-center font-bold">
            <span class="bi bi-plus cursor-pointer">-</span>
            <input
                type="text" readonly="" class="quantity border rounded w-12 text-center font-medium"
                value="1">
            <span class="bi bi-dash cursor-pointer">+</span>
            <button class="border border-gray-800 text-black p-2 text-xl" onclick="addItemToCart()">Add To
              Cart
            </button>
          </div>
        </div>
      </div>
      <div class="my-20">
        <h6 class="font-bold text-2xl">Mô tả sản phẩm</h6>
        <p>{{ productDetailData.short_desc }}</p>
      </div>
      <div>
        <h6 class="font-bold text-2xl">Có thể bạn sẽ thích</h6>
        <div class=" grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 mt-5">
          <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative"
               v-for="(mightYouLikeProductsItem,indexMightYouLikeProducts) in mightYouLikeProductsData"
               :key="indexMightYouLikeProducts">
            <img class="w-full h-72 object-cover" :src="mightYouLikeProductsItem.image.full_image_path" alt="">
            <div class="mx-3 my-2 ">
              <div class="flex justify-between items-center">
                <h6 class="text-xl font-semibold">{{ mightYouLikeProductsItem.name }}</h6>
                <i class="fa-solid fa-heart"></i>
              </div>
              <span class="text-xl font-semibold my-4 inline-block">{{ mightYouLikeProductsItem.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {productDetailService} from "@/service/productDetailService";

export default {
  data() {
    return {
      productDetailData: {},
      mightYouLikeProductsData: {},
      productImg:'',
      productId:0,
    }
  },
  methods: {
    async getData() {
      try {
        const resp = await productDetailService.getProductDetail(this.productId);
        this.productDetailData = resp.data.product;
        this.mightYouLikeProductsData = resp.data.mightYouLikeProducts;
        this.productImg = this.productDetailData.images[0].full_image_path;
        console.log(this.productDetailData);
        console.log(this.productImg);
        setTimeout(()=>{
          window.scroll(0,0)
        },500)
      } catch (e) {
        console.log(e);
      }
    },
    handleProductImg(img){
      this.productImg = img;
    },
  },
  mounted() {
    this.productId = this.$route.query.id;
    this.getData();

  },
  components: {}
}
</script>

<style>
</style>