<script setup lang="ts">
import { ref } from "vue";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { getAllSheetsData } from '@/composables/useSheet';

// const data = ref<any | null | undefined>([{}]);
// const dataLoaded = ref(false);
// data.value = await getAllSheetsData();
// if (data.value) {
//   dataLoaded.value = true;
// }
// console.log(data.value);

const swiper = useSwiper();

const data_product = [
  {
    id: 1,
    image: "/_nuxt/assets/HomeContent/Produk1.png",
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#",
  },
  {
    id: 2,
    image: "/_nuxt/assets/HomeContent/Produk2.png",
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#",
  },
  {
    id: 3,
    image: "/_nuxt/assets/HomeContent/Produk3.png",
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#",
  },
  {
    id: 4,
    image: "/_nuxt/assets/HomeContent/Produk4.png",
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#",
  },
  {
    id: 5,
    image: "/_nuxt/assets/HomeContent/Produk5.png",
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#",
  },
  {
    id: 6,
    image: "/_nuxt/assets/HomeContent/Produk6.png",
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#",
  },
];
</script>

<template>
  <div class="relative">
    <!--  <h1>This is Index Page!</h1>
    <table v-if="dataLoaded">
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td>{{ row.name }}</td>
          <td>{{ row.price }}</td>
          <td>{{ row.color }}</td>
          <td>{{ row.location }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading data...</p> -->
    <HeaderHome />
    <div class="line absolute hidden lg:block"></div>
    <div id="content">
      <HomeContentHomePelayanan />
      <HomeContentHomeProduct />
      <HomeContentHomeTesti />
      <HomeContentHomeGallery />
      <HomeContentHomeCustom />
      <HomeContentHomeLocation />
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/global.scss");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

#content {
  /* width:85vw; */
  margin: auto;
  border-left: 1px dashed #c0b5a5;
  background-color: #fff7f0;
}

.line {
  z-index: 0;
  content: " ";
  width: 7.5%;
  left: 0px;
  height: 100%;
  top: 0px;
  /* border-right: #c0b5a5 dashed 2px; */
  background-image: linear-gradient(#c0b5a5 50%, rgba(255, 255, 255, 0) 0%);
  background-position: right;
  background-size: 1px 20px;
  background-repeat: repeat-y;
}
</style>
