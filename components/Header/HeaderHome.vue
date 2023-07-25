<script setup>
import { useMediaQuery } from "@vueuse/core";

const mediaQuery = useMediaQuery("(min-width: 1024px)").value;

let headerImageSource = mediaQuery
  ? "@/assets/HomeHeader/homeheaderLg.png"
  : "@/assets/HomeHeader/homeheader.png";
</script>

<template>
  <div class="header">
    <div
      class="flex py-10 px-4 md:px-20 lg:px-20 relative flex-col lg:flex-row">
      <div class="sideText absolute justify-start hidden lg:block">
        Project Ami
      </div>

      <div class="w-100 lg:w-3/6 relative lg:px-16 xl:pl-32 2xl:pl-52 lg:mt-20">
        <h1 class="megan">Handmade with <b class="love">Love</b> by Ami</h1>
        <p class="mt-10 noto-sans">
          Handcrafted gift box, snack bouquets, flower bouquets for affordable
          prices and customize your own desired order
        </p>
        <div class="flex items-center mt-10">
          <button class="shop noto-sans w-32 mr-10 p-4 rounded-full font-bold">
            Shop now
          </button>
          <div
            class="flex noto-sans cursor-pointer justify-center items-center gap-2">
            <p>Custom Order</p>
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5303 6.53033C20.8232 6.23744 20.8232 5.76256 20.5303 5.46967L15.7574 0.696698C15.4645 0.403804 14.9896 0.403804 14.6967 0.696698C14.4038 0.989591 14.4038 1.46446 14.6967 1.75736L18.9393 6L14.6967 10.2426C14.4038 10.5355 14.4038 11.0104 14.6967 11.3033C14.9896 11.5962 15.4645 11.5962 15.7574 11.3033L20.5303 6.53033ZM6.55671e-08 6.75L20 6.75L20 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                fill="#595758" />
            </svg>
          </div>
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
          class="flex w-100 medsos justify-between mt-4 lg:mt-0 lg:flex-col lg:absolute lg:space-y-4">
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
.noto-sans {
  font-family: "Noto Sans";
}
.megan {
  font-family: Megan;
}
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
