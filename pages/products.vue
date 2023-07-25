<template>
  <div class="relative">
    <HeaderOrder />
    <div class="line absolute hidden lg:block"></div>
    <Products />
  </div>
</template>

<style scoped>
@import url("../assets/global.scss");
.line {
  z-index: 0;
  content: " ";
  width: 100px;
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
