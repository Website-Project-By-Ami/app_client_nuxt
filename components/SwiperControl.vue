<script setup lang="ts">
const swiper = useSwiper();
</script>

<template>
  <div class="swiper_button">
    <button @click="swiper.slidePrev()" class="button_left"><img src="@/assets/HomeContent/ArrowGallery.svg" alt="kanan" class="arrow"></button>
    <button  @click="swiper.slideNext()" class="button_right"><img src="@/assets/HomeContent/ArrowGallery.svg" alt="kiri" class="arrow"></button>
  </div>
</template>

<style scoped>
  .swiper_button{
    position: absolute;
    top:40%;
    left:0%;
    width:85vw;
    justify-content: space-between;
    display: flex;
  }

  .button_left{
    left:0%;
    transform: scaleX(-1);
    z-index: 5 !important;
  }
  
  .button_right{
    right:0%;
    z-index: 3;
  }

  .arrow{
    width:10vw;
    height:auto;
  }
</style>