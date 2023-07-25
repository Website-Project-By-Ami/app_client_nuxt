<script setup>
import logo from "@/assets/image/Shopee.svg";
</script>

<template>
  <div class="header">
    <div class="flex px-10 lg:px-20 relative flex-col lg:flex-row">
      <div class="sideText absolute justify-start hidden lg:block">
        Project Ami
      </div>
      <div class="w-100 lg:w-3/6 relative lg:px-20 flex justify-center">
        <img class="w-100 product1" src="@/assets/OrderHeader/product1.png" />
      </div>
      <div
        class="flex flex-col relative items-center mt-10 lg:mt-0 w-100 lg:w-3/6 relative lg:pr-28 xl:pr-40">
        <img class="w-100 mt-20" src="@/assets/OrderHeader/title.svg" />
        <img class="w-80 mt-20" src="@/assets/OrderHeader/product2.png" />
        <div
          class="flex w-100 medsos justify-between lg:flex-col lg:absolute lg:space-y-4">
          <img
            class="w-1/6 lg:w-24 h-fit"
            src="@/assets/HomeHeader/whatsapp.png" />
          <img
            class="w-1/6 lg:w-24 h-fit"
            src="@/assets/HomeHeader/instagram.png" />
          <img
            class="w-1/6 lg:w-24 h-fit"
            src="@/assets/HomeHeader/shopee.png" />
        </div>
      </div>
    </div>
    <div class="flex justify-center align-center">
      <img class="w-10" src="@/assets/HomeHeader/arrow.svg" />
    </div>
  </div>
</template>

<style scoped>
.love {
  color: #f63866;
}

.shop {
  background: #f63866;
  color: white;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.6));
}

h1 {
  font-size: 5rem;
  line-height: 1;
}
.header {
  background: #ffeef2;
  min-height: 100vh;
}

.sideText {
  font-size: 3.5rem;
  color: #b1668c;
  font-family: Te-quirtez;
  left: -70px;
  top: 20%;
  transform: rotate(-90deg) translate(-50%, -50%);
}

.moneyBox {
  z-index: 11;
  top: 20%;
  right: 10%;
  width: 15rem;
}

.featured {
  z-index: 11;
  top: 8px;
  right: 40%;
  width: 12rem;
}

.flower {
  width: auto;
  height: 140%;
  z-index: 1;
  top: -23%;
  right: -27%;
}

@media screen and (min-width: 1024px) {
  .medsos {
    z-index: 11;
    bottom: 0px;
    right: 15%;
    width: 12%;
  }
}
</style>
