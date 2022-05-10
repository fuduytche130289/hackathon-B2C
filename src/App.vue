<template>
  <div>
    <!-- Menu -->
    <div class="w-full h-24 shadow-lg shadow-black-500/50 flex md:space-x-6 md:px-0 px-5 justify-between items-center ">
      <div class="md:order-1 order-2 w-32 pl-6">
        <router-link :to="{name:'list-product'}">
          <img src="./assets/logo.png" alt="logo">
        </router-link>
      </div>
      <div class="md:order-2 order-1 pr-6 flex space-x-2 uppercase font-semibold items-center">
        <div class=".pr-4"><a href="">Home</a></div>
        <div class=".pr-4"><a href="">Danh mục</a></div>
        <div class=".pr-4">
          <router-link :to="{name:'signup'}">
            <a href="">Đăng ký</a>
          </router-link>
        </div>
        <div class=".pr-4">
          <router-link :to="{name:'login'}">
            <a href="">Đăng nhập</a>
          </router-link>
        </div>
        <div class="relative">
          <router-link :to="{name:'card-detail'}">
            <div class="w-8"><img src="./assets/shopping.jpg" alt="shopping"></div>
            <div
                class="bg-red-400 text-white -top-4 -right-2 absolute rounded-full text-sm w-6 h-6 flex items-center justify-center cart-item-counter">
              0
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- Footer -->
    <div class="bg-gray-400  mx-12 mt-7 flex justify-around p-9">
      <div>
        <img src="./assets/logo.png" alt="" key="
          " class="w-18 h-16 ">
        <p class="font-bold mt-5">
          Công ty TNHH 1 thành viên Luân
        </p>
        <p class="font-bold">
          Địa chỉ: Hạ Long - Quảng Ninh
        </p>
        <p class="font-bold">
          SDT: 0868120192
        </p>
        <p class="font-bold">
          Fax: 0868120196
        </p>
      </div>
      <div>
        <p class="font-bold">
          Về chúng tôi
        </p>
        <p class="font-bold">
          Chính sách mua hàng
        </p>
        <p class="font-bold">
          Chính sách trả hàng
        </p>
      </div>
      <div>
        <p>Mạng xã hội</p>
        <span><i class="fa-brands fa-facebook mr-3"></i></span>
        <span><i class="fa-brands fa-facebook mr-3"></i></span>
        <span><i class="fa-brands fa-facebook mr-3"></i></span>
      </div>
    </div>
    <!--    end footer-->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>

</style>
