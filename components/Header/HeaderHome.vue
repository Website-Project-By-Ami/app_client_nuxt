<script setup>
import { useMediaQuery } from "@vueuse/core";

const mediaQuery = useMediaQuery("(min-width: 1024px)").value;

let headerImageSource = mediaQuery
  ? "@/assets/HomeHeader/homeheaderLg.png"
  : "@/assets/HomeHeader/homeheader.png";
</script>

<template>
  <div class="header">
    <div class="flex py-10 px-10 lg:px-20 relative flex-col lg:flex-row">
      <div class="sideText absolute justify-start hidden lg:block">
        Project Ami
      </div>

      <div class="w-100 lg:w-3/6 relative lg:px-20 lg:mt-20">
        <h1 class="font-bold">Handmade with <b class="love">Love</b> by Ami</h1>
        <p class="mt-10">
          Handcrafted gift box, snack bouquets, flower bouquets for affordable
          prices and customize your own desired order
        </p>
        <div class="flex items-center mt-10">
          <button class="shop w-32 mr-10 p-4 rounded-full font-bold">
            Shop now
          </button>
          <p>Custom Order</p>
        </div>
      </div>
      <div class="mt-10 lg:mt-0 w-100 lg:w-3/6 relative">
        <!-- <img class="w-100 z-10 relative headBg" :src="headerImageSource" /> -->
        <img
          class="w-100 z-10 relative headBg headLg"
          src="@/assets/HomeHeader/homeheaderLg.png" />
        <img
          class="w-100 z-10 relative headBg headsm"
          src="@/assets/HomeHeader/homeheader.png" />

        <img
          class="absolute featured w-2"
          src="@/assets/HomeHeader/featured.png" />
        <img class="absolute moneyBox" src="@/assets/HomeHeader/moneyBox.png" />
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

.headBg {
  width: 100%;
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
  right: 1%;
  width: 8rem;
}

.featured {
  width: 8rem;
  z-index: 11;
  top: -10px;
  right: 10%;
}

.headsm {
  display: block;
}

.headLg {
  display: none;
}

@media screen and (min-width: 1024px) {
  .headsm {
    display: none;
  }

  .headLg {
    display: block;
  }
  .medsos {
    z-index: 11;
    bottom: 0px;
    right: 15%;
    width: 12%;
  }
  .moneyBox {
    z-index: 11;
    top: 25%;
    right: 23%;
    width: 15rem;
  }

  .featured {
    z-index: 11;
    top: 30px;
    right: 45%;
    width: 12rem;
  }
}
</style>
